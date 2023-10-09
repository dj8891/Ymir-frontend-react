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

const AddressScreen = styled(({ className }: AddressScreenProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      address: "",
      country: "",
      phone: "",
    },
  });

  const onSubmit: any = (addressFormData: any) => {
    console.log({ addressFormData });
    console.log("Redirect to next page...");
    navigate("/registration/3");
  };

  return (
    <div className={className}>
      <BaseRegistrationScreen contained title={t("registrationFlow.addressScreen.title")}>
        <p>{t("registrationFlow.addressScreen.moreAboutYou")}</p>
        <h4>{t("registrationFlow.addressScreen.addressCountryPhone")}</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="address"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  id="full-name"
                  label={t("registrationFlow.addressScreen.addressLabel")}
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
                  id="full-name"
                  label={t("registrationFlow.addressScreen.countryLabel")}
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
              console.log({ field });
              return (
                <MuiTelInput
                  defaultCountry="DE"
                  label={t("registrationFlow.addressScreen.phoneLabel")}
                  value={field.value}
                  onChange={field.onChange}
                />
              );
            }}
          />
          <br />
          <br />

          <RegistrationFlowButton variant="contained" type="submit">
            {t("registrationFlow.addressScreen.continue")}
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

export default AddressScreen;
