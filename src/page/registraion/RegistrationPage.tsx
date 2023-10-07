import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Colors from "../../constants/colors";
import { ReactComponent as TemporaryLogo } from "./assets/temporary-logo.svg";
import { ReactComponent as ChatAssistanceIcon } from "./assets/chat-assistance-icon.svg";
import { Outlet } from "react-router-dom";

interface RegistrationPageProps {
  className?: string;
}

const RegistrationPage = styled(({ className }: RegistrationPageProps) => {
  const { t } = useTranslation();

  return (
    <div id="registration-page" className={className}>
      <div className="registration-area">
        <TemporaryLogo className="registration-logo" />

        <div className="registration-area-content">
          <Outlet />
        </div>

        <ChatAssistanceIcon className="chatbot-icon" />
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
    position: relative;

    .registration-logo {
      margin: 0 auto;
      width: 3rem;
      height: 3rem;
      display: block;
    }

    .chatbot-icon {
      position: absolute;
      bottom: 1rem;
      right: 1.5rem;
      width: 2.75rem;
      height: 2.75rem;
    }

    .registration-area-content {
      height: 87%;
      width: 100%;
      overflow-y: scroll;
    }
  }
`;

export default RegistrationPage;
