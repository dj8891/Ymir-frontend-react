import React from "react";
import styled from "styled-components";
import BaseRegistrationScreen from "../BaseRegistrationScreen";
import { useTranslation } from "react-i18next";

import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

import RegistrationFlowButton from "../components/RegistrationFlowButton";
import { useNavigate } from "react-router-dom";

interface NameScreenProps {
  className?: string;
}

const NameScreen = styled(({ className }: NameScreenProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
    },
  });

  const onSubmit: any = (nameFormData: any) => {
    console.log({ nameFormData });
    console.log("Redirect to next page...");
    navigate("/registration/2");
  };

  return (
    <div className={className}>
      <BaseRegistrationScreen contained title={t("registrationFlow.nameScreen.title")}>
        <p>Let's set up your account.</p>
        <h4>What's your full name?</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => {
              return <TextField id="full-name" label="Full Name" variant="outlined" {...field} />;
            }}
          />
          <br />
          <br />

          <RegistrationFlowButton variant="contained" type="submit">
            Continue
          </RegistrationFlowButton>
        </form>
      </BaseRegistrationScreen>
    </div>
  );
})`
  form div {
    width: 100%;
  }

  .registration-flow-button {
    float: right;
  }
`;

export default NameScreen;
