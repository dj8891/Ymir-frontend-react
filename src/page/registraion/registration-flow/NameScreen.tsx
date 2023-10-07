import React from "react";
import styled from "styled-components";
import BaseRegistrationScreen from "../BaseRegistrationScreen";
import { useTranslation } from "react-i18next";

import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
interface NameScreenProps {
  className?: string;
}

const NameScreen = styled(({ className }: NameScreenProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      iceCreamType: {},
    },
  });

  const onSubmit: any = (data: any) => {
    console.log(data);
  };

  return (
    <div className={className}>
      <BaseRegistrationScreen title={t("registrationFlow.nameScreen.title")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller name="firstName" control={control} render={({ field }) => <Input {...field} />} />
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              />
            )}
          />
          <input type="submit" />
        </form>
      </BaseRegistrationScreen>
    </div>
  );
})``;

export default NameScreen;
