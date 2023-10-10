import React from "react";
import styled from "styled-components";
import BaseRegistrationScreen from "../BaseRegistrationScreen";
import { useTranslation } from "react-i18next";

import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

import RegistrationFlowButton from "../components/RegistrationFlowButton";
import { useNavigate } from "react-router-dom";
import { MuiTelInput } from "mui-tel-input";

interface AddressScreenProps {
  className?: string;
}

const YourInformationScreen = styled(({ className }: AddressScreenProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      address: "",
      country: "",
      phone: "",
    },
  });

  const onSubmit: any = (addressFormData: any) => {
    console.log({ addressFormData });
    navigate("/registration/2");
  };

  return (
    <div className={className}>
      <BaseRegistrationScreen contained title={t("registrationFlow.yourInformationScreen.title")}>
        <p>
          <strong>{t("registrationFlow.yourInformationScreen.setUp")}</strong>
        </p>
        <h2>{t("registrationFlow.yourInformationScreen.addressCountryPhone")}</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  id="full-name"
                  label={t("registrationFlow.yourInformationScreen.nameLabel")}
                  variant="outlined"
                  {...field}
                />
              );
            }}
          />

          <br />
          <br />

          <Controller
            name="address"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  id="address"
                  label={t("registrationFlow.yourInformationScreen.addressLabel")}
                  variant="outlined"
                  {...field}
                />
              );
            }}
          />

          <br />
          <br />

          <Controller
            name="country"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  id="country"
                  label={t("registrationFlow.yourInformationScreen.countryLabel")}
                  variant="outlined"
                  {...field}
                />
              );
            }}
          />

          <br />
          <br />

          <Controller
            control={control}
            name="phone"
            render={({ field }) => {
              return (
                <MuiTelInput
                  defaultCountry="DE"
                  label={t("registrationFlow.yourInformationScreen.phoneLabel")}
                  value={field.value}
                  onChange={field.onChange}
                />
              );
            }}
          />

          <br />
          <br />

          <RegistrationFlowButton variant="contained" type="submit">
            {t("registrationFlow.yourInformationScreen.continue")}
          </RegistrationFlowButton>
        </form>
      </BaseRegistrationScreen>
    </div>
  );
})`
  form > div {
    width: 100%;
  }

  .registration-flow-button {
    float: right;
  }
`;

export default YourInformationScreen;
