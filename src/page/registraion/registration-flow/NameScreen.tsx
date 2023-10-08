import React from "react";
import styled from "styled-components";
import BaseRegistrationScreen from "../BaseRegistrationScreen";
import { useTranslation } from "react-i18next";

import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

import RegistrationFlowButton from "../components/RegistrationFlowButton";

interface NameScreenProps {
  className?: string;
}

const NameScreen = styled(({ className }: NameScreenProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
    },
  });

  const onSubmit: any = (data: any) => {
    console.log(data);
  };

  return (
    <div className={className}>
      <BaseRegistrationScreen contained title={t("registrationFlow.nameScreen.title")}>
        <h5>Let's set up your account</h5>
        <h4>What's your full name?</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => {
              return <TextField label="Full Name" variant="outlined" {...field} />;
            }}
          />
          <br />
          <br />

          <RegistrationFlowButton variant="contained" type="submit">
            Test
          </RegistrationFlowButton>
        </form>
      </BaseRegistrationScreen>
    </div>
  );
})``;

export default NameScreen;
