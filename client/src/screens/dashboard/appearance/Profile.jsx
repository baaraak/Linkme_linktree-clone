import { Strong, TextareaField, TextInputField } from 'evergreen-ui';
import Button from 'components/button/Button';
import React from 'react';
import { useCloudinaryWidget } from 'services/cloudinary';
import Avatar from 'components/avatar/Avatar';

const Profile = ({ username, avatar, title, bio, onChange }) => {
  const { widget } = useCloudinaryWidget((error, result) => {
    if (!error && result && result.event === 'success') {
      console.log(result.info);
      onChange({ avatar: result.info.public_id });
    }
  });

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
            onClick={() => console.log(widget.open())}
          >
            Pick Image
          </Button>
          <Button
            height={40}
            fullWidth
            disabled={!avatar}
            onClick={() => onChange({ avatar: '' })}
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
