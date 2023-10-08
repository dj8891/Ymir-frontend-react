import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Colors from "../../../constants/colors";

interface RegistrationFlowButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
  variant?: "contained" | "outlined";
}

const RegistrationFlowButton = styled(({ children, className }: RegistrationFlowButtonProps) => {
  return (
    <Button className={className}>
      <span className="button-text">{children}</span>
    </Button>
  );
})`
  background-color: ${Colors.activeBlue} !important;
  border-radius: 1.25rem !important;

  .button-text {
    color: ${Colors.backgroundWhite};
    padding: 0 1.5rem;
    text-transform: none !important;
  }
`;

export default RegistrationFlowButton;
