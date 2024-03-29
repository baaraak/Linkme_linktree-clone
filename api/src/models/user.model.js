const mongoose = require("mongoose");
const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const moment = require("moment-timezone");
const jwt = require("jwt-simple");
const uuidv4 = require("uuid/v4");
const APIError = require("../utils/APIError");
const { jwtSecret, defaultAvatar } = require("../config/constants");
const { generateUsername } = require("../utils/generateUsername");
const Site = require("./site.model");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxlength: 30,
      index: true,
      trim: true,
      unique: true,
    },
    bio: String,
    title: String,
    avatar: { type: String, default: defaultAvatar },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    fullName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 30,
    },
    site: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Site",
    },
    googleId: String,
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function save(next) {
  // encrypt password before saving document
  try {
    if (!this.isModified("password")) return next();

    const rounds = 10;

    const hash = await bcrypt.hash(this.password, rounds);
    this.password = hash;

    const site = new Site({
      user: this._id,
    });

    const userSite = await site.save();

    this.site = userSite._id;

    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Methods
 */
userSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "id",
      "fullName",
      "bio",
      "avatar",
      "title",
      "email",
      "username",
      "createdAt",
      "site",
    ];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },

  token() {
    const playload = {
      exp: moment().add("48", "hours").unix(),
      iat: moment().unix(),
      id: this._id,
    };
    return jwt.encode(playload, jwtSecret);
  },

  async passwordMatches(password) {
    return bcrypt.compare(password, this.password);
  },
});

userSchema.statics = {
  // get user by ID
  async get(id) {
    try {
      let user;

      if (mongoose.Types.ObjectId.isValid(id)) {
        user = await this.findById(id).exec();
      }
      if (user) {
        return user;
      }

      throw new APIError({
        message: "User does not exist",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  // Find user by email and tries to generate a JWT token
  async findAndGenerateToken(options) {
    const { email, password } = options;
    if (!email) {
      throw new APIError({
        message: "An email is required",
      });
    }

    const user = await this.findOne({ email }).exec();
    const err = {
      status: httpStatus.UNAUTHORIZED,
      isPublic: true,
    };
    if (password) {
      if (user && (await user.passwordMatches(password))) {
        return { user, accessToken: user.token() };
      }
      err.message = "Incorrect email or password";
    } else {
      err.message = "Incorrect email";
    }
    throw new APIError(err);
  },

  // Return new validation error if error is a mongoose duplicate key error
  checkDuplicates(error) {
    if (error.name === "MongoError" && error.code === 11000) {
      // check if the error from Mongodb is duplication error
      // eslint-disable-next-line no-useless-escape
      const regex = /index\:\ (?:.*\.)?\$?(?:([_a-z0-9]*)(?:_\d*)|([_a-z0-9]*))\s*dup key/i;
      const match = error.message.match(regex);
      const fieldName = match[1] || match[2];
      return new APIError({
        message: `${fieldName} already exists`,
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  },

  async oAuthLogin({ id, email, name: fullName }) {
    const existingUser = await this.findOne({
      $or: [{ googleId: id }, { email }],
    });
    if (existingUser) {
      existingUser.googleId = id;
      if (!existingUser.fullName) existingUser.fullName = fullName;
      return existingUser.save();
    }
    const username = generateUsername(email);
    const password = uuidv4();

    const user = await this.create({
      googleId: id,
      email,
      password,
      fullName,
      username,
    });

    const site = new Site({
      user: user._id,
    });
    const userSite = await site.save();

    user.site = userSite._id;
    await user.save();
    return user;
  },
};

module.exports = mongoose.model("User", userSchema);
