import { IconButton } from "@material-ui/core";
import React from "react";
import emoji from "../../assets/svg/emoji.svg";

const EmojiButton: React.FC = () => {
  return (
    <IconButton color="default" aria-label="Save button" component="span">
      <img src={emoji} alt="emoji Icon" />
    </IconButton>
  );
};

export default EmojiButton;
