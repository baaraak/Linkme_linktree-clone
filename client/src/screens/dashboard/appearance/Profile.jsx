import {
  Avatar,
  Strong,
  Textarea,
  TextareaField,
  TextInputField,
} from "evergreen-ui";
import Button from "components/button/Button";
import React, { useEffect, useRef } from "react";
import { loadScript } from "services/utils";
import { Cloudinary } from "services/cloudinary";

const Profile = ({ username, avatar, title, bio, onChange }) => {
  const ref = useRef();

  const initImageCloudinaryWidget = async () => {
    await loadScript(Cloudinary.widget_script);

    ref.current = window.cloudinary.createUploadWidget(
      Cloudinary.options,
      handleCloudinaryResponse
    );
  };

  const handleCloudinaryResponse = (error, result) => {
    if (!error && result && result.event === "success") {
      onChange({ avatar: result.info.secure_url });
    }
  };

  useEffect(() => {
    initImageCloudinaryWidget();
  }, []);

  return (
    <div className="profile">
      <Strong size={600} className="box__title">
        Profile
      </Strong>
      <div className="box shadow-sm">
        <section>
          <Avatar src={avatar} size={100} />
          <Button
            height={40}
            appearance="primary"
            fullWidth
            onClick={() => ref.current.open()}
          >
            Pick an Image
          </Button>
          <Button
            height={40}
            fullWidth
            disabled={!avatar}
            onClick={() => onChange({ avatar: "" })}
          >
            Remove
          </Button>
        </section>
        <TextInputField
          label="Profile Title"
          inputHeight={40}
          placeholder={username}
          defaultValue={title}
          onBlur={(e) => onChange({ title: e.target.value })}
        />
        <TextareaField
          label="Bio"
          placeholder="Enter a bio description to appear on your Linkme"
          onBlur={(e) => onChange({ bio: e.target.value })}
          defaultValue={bio}
        />
      </div>
    </div>
  );
};

export default Profile;
