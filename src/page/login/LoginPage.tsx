import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface LoginPageProps {
  className?: string;
}

const LoginPage = styled(({ className }: LoginPageProps) => {
  const { t } = useTranslation();

  return (
    <div id="login-page" className={className}>
      <p>Login page will go here</p>
    </div>
  );
})`
  padding-top: 10%;

  p {
    text-align: center;
  }
`;

export default LoginPage;
