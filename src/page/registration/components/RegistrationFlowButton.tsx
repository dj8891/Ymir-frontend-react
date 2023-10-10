import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Colors from "../../../constants/colors";

interface RegistrationFlowButtonProps {
  children: React.ReactNode;
  className?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined";
  onClick?: () => any;
}

const RegistrationFlowButton = styled(
  ({ children, className, onClick, type = "button", variant = "contained" }: RegistrationFlowButtonProps) => {
    return (
      <Button className={`registration-flow-button ${className}`} onClick={onClick} type={type} variant={variant}>
        <span className="button-text">{children}</span>
      </Button>
    );
  },
)`
  background-color: ${(props) =>
    props.variant === "contained" ? `${Colors.activeBlue} !important` : `${Colors.backgroundWhite} !important`};
  border-color: ${Colors.activeBlue} !important;
  border-width: 2px !important;
  border-radius: 1.25rem !important;

  .button-text {
    color: ${(props) => props.textColor ?? Colors.backgroundWhite} !important;
    padding: 0 1.5rem;
    text-transform: none !important;
  }
`;

export default RegistrationFlowButton;
