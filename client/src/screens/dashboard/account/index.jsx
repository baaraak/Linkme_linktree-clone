import React, { useState } from "react";
import Button from "components/button/Button";
import {
  Alert,
  Dialog,
  Link,
  Strong,
  Text,
  TextInputField,
  toaster,
} from "evergreen-ui";
import { useAuth } from "context/auth.context";
import { Controller, useForm } from "react-hook-form";
import { profileSchema } from "services/validations";
import { joiResolver } from "@hookform/resolvers/joi";
import { generateSiteUrl } from "services/utils";

export default function Account() {
  const { user, _delete, update } = useAuth();
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const { control, handleSubmit, errors, formState } = useForm({
    resolver: joiResolver(profileSchema),
    mode: "onChange",
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState();
  const { isDirty } = formState;

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await update(values);
      toaster.success("Account Updated!");
    } catch (err) {
      setApiError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="account page__container">
      <Strong className="account__title">My Account</Strong>

      <Strong size={600} className="box__title">
        My information
      </Strong>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!!apiError && (
          <Alert intent="danger" marginBottom={15} title={apiError} />
        )}
        <div className="box shadow-sm">
          <Controller
            name="fullName"
            control={control}
            defaultValue={user.fullName}
            render={({ onChange, value }) => (
              <TextInputField
                label="Name"
                inputHeight={40}
                isInvalid={!!errors.fullName}
                validationMessage={errors.fullName?.message}
                onChange={onChange}
                value={value}
                placeholder="Name"
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue={user.email}
            render={({ onChange, value }) => (
              <TextInputField
                label="Email"
                inputHeight={40}
                isInvalid={!!errors.email}
                validationMessage={errors.email?.message}
                onChange={onChange}
                value={value}
                type="email"
                placeholder="Email"
              />
            )}
          />
        </div>
        <Button height={40} height={50} type="submit" disabled={!isDirty}>
          Save details
        </Button>
      </form>
      <Strong size={600} className="box__title">
        Account actions
      </Strong>
      <div className="box shadow-sm">
        <Button height={40} appearance="primary">
          Reset Password
        </Button>
      </div>

      <Strong size={600} className="box__title">
        Danger Zone
      </Strong>
      <div className="box shadow-sm">
        <Button
          height={40}
          intent="danger"
          appearance="primary"
          onClick={() => setShowDeleteWarning(true)}
        >
          Delete Account
        </Button>
      </div>
      {showDeleteWarning && (
        <Dialog
          isShown
          title="Are you sure?"
          intent="danger"
          onConfirm={_delete}
          onCloseComplete={() => setShowDeleteWarning(false)}
        >
          <div className="delete-user-dialog">
            <Text color="black" size={500}>
              Deleting your account is irreversible. Please proceed with
              caution.
            </Text>
            <br />
            <br />
            <Text color="black" size={500}>
              By selecting YES, DELETE MY ACCOUNT below, your primary tree (@
              {user.username}) will be imediately terminated and your data will
              be lost. Visitors will no longer be able to{" "}
              <Link href={generateSiteUrl(user.username)}>
                access your URL.
              </Link>
            </Text>
          </div>
        </Dialog>
      )}
    </div>
  );
}
