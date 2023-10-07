import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Colors from "../../constants/colors";
import { ReactComponent as TemporaryLogo } from "./assets/temporary-logo.svg";

interface RegistrationPageProps {
  className?: string;
}

const RegistrationPage = styled(({ className }: RegistrationPageProps) => {
  const { t } = useTranslation();

  return (
    <div id="registration-page" className={className}>
      <div className="registration-area">
        <TemporaryLogo className="registration-logo" />
      </div>
    </div>
  );
})`
  height: 100%;
  padding: 1rem;

  .registration-area {
    background: ${Colors.backgroundWhite};
    height: 83%;
    margin: 0 auto;
    border-radius: 0.5rem;
    max-width: 60rem;
    padding: 2rem;

    .registration-logo {
      margin: 0 auto;
      width: 3rem;
      height: 3rem;
      display: block;
    }
  }
`;

export default RegistrationPage;
