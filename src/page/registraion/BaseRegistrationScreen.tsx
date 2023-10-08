import React from "react";
import styled from "styled-components";
import { ReactComponent as BackArrow } from "./assets/back-arrow.svg";
import { useLocation, Location, useNavigate } from "react-router-dom";

interface BaseRegistrationScreenProps {
  children?: React.ReactNode;
  className?: string;
  contained?: boolean;
  title: string;
}

const BaseRegistrationScreen = styled(({ children, className, title }: BaseRegistrationScreenProps) => {
  const location: Location = useLocation();
  const currentPageNumber: number = Number(location.pathname.split("/").pop());
  const navigate = useNavigate();

  return (
    <div id="base-registration-screen" className={className}>
      <div className="header-area">
        {currentPageNumber > 1 && (
          <BackArrow className="back-arrow" onClick={() => navigate(`/registration/${currentPageNumber - 1}`)} />
        )}
        <h3>
          <span>{currentPageNumber}.</span> {title}
        </h3>
      </div>
      <div className="child-content">{children}</div>
    </div>
  );
})`
  padding-top: 1rem;

  .header-area {
    max-width: 40rem;
    margin: 0 auto;

    .back-arrow {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      vertical-align: top;
    }

    h3 {
      margin: 0;
      display: inline-block;
      vertical-align: top;
      padding-left: 1rem;
    }
  }

  .child-content {
    padding-top: 1rem;
    max-width: ${(props) => (props.contained ? "40rem" : "100%")};
    margin: 0 auto;
  }
`;

export default BaseRegistrationScreen;
