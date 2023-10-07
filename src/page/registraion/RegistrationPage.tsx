import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface RegistrationPageProps {
  className?: string;
}

const RegistrationPage = styled(({ className }: RegistrationPageProps) => {
  const { t } = useTranslation();

  return (
    <div id="registration-page" className={className}>
      <p>Registration page will go here</p>
    </div>
  );
})`
  padding-top: 10%;

  p {
    text-align: center;
  }
`;

export default RegistrationPage;
