import { IconButton } from "@material-ui/core";
import React from "react";
import emoji from "../../assets/svg/emoji.svg";
interface EmojiProps {}

const EmojiButton: React.FC<EmojiProps> = ({}) => {
  return (
    <IconButton color="default" aria-label="Save button" component="span">
      <img src={emoji} alt="emoji Icon" />
    </IconButton>
  );
};

export default EmojiButton;
