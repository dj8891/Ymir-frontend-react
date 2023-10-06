import { IconButton } from "@material-ui/core";
import React from "react";
import upload from "../../assets/svg/upload.svg";

const UploadButton: React.FC = () => {
  return (
    <IconButton color="default" aria-label="Save button" component="span">
      <img src={upload} alt="Upload Icon" />
    </IconButton>
  );
};

export default UploadButton;
