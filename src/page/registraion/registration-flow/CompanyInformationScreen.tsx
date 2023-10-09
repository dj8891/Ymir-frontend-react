import React from "react";
import styled from "styled-components";
import BaseRegistrationScreen from "../BaseRegistrationScreen";
import { useTranslation } from "react-i18next";

import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

import RegistrationFlowButton from "../components/RegistrationFlowButton";
import { useNavigate } from "react-router-dom";
import { MuiTelInput } from "mui-tel-input";

interface CompanyInformationScreenProps {
  className?: string;
}

const CompanyInformationScreen = styled(({ className }: CompanyInformationScreenProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      companyName: "",
      industry: "",
      billing: "",
    },
  });

  const onSubmit: any = (companyInformationFormData: any) => {
    console.log({ companyInformationFormData });
    console.log("Redirect to next page...");
    navigate("/registration/4");
  };

  return (
    <div className={className}>
      <BaseRegistrationScreen contained title={t("registrationFlow.companyInformationScreen.title")}>
        <p>{t("registrationFlow.companyInformationScreen.technicalQuestions")}</p>
        <h4>{t("registrationFlow.companyInformationScreen.companyInfo")}</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  id="company-name"
                  label={t("registrationFlow.companyInformationScreen.companyNameLabel")}
                  variant="outlined"
                  {...field}
                />
              );
            }}
          />
          <br />
          <br />

          <Controller
            name="industry"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  id="industry"
                  label={t("registrationFlow.companyInformationScreen.industryLabel")}
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
            name="billing"
            render={({ field }) => {
              return (
                <TextField
                  id="billing"
                  label={t("registrationFlow.companyInformationScreen.billingLabel")}
                  variant="outlined"
                  {...field}
                />
              );
            }}
          />
          <br />
          <br />

          <RegistrationFlowButton variant="contained" type="submit">
            {t("registrationFlow.companyInformationScreen.continue")}
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

export default CompanyInformationScreen;
