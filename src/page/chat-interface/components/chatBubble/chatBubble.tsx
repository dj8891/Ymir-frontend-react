import { Avatar, Box } from "@mui/material";
import React from "react";
import logo from "../../assets/svg/logo.svg";

interface ChatBubbleProps {
  text: string;
  user: "userA" | "userB";
  avatar: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, user, avatar }) => (
  <Box
    display="flex"
    flexDirection={user === "userA" ? "row" : "row-reverse"}
    alignItems="end"
    mb={2}
  >
    {user === "userA" && (
      <Avatar
        src={logo}
        alt={`${user} avatar`}
        sx={{ borderRadius: "20%", width: "30px", height: "30px" }}
      />
    )}
    <Box
      bgcolor={user === "userA" ? "#DCDCDC" : "#909090"}
      p={2}
      borderRadius={5}
      ml={1}
      mr={0}
      maxWidth="70%"
      color={user === "userA" ? "#000" : "#fff"}
    >
      {text}
    </Box>
  </Box>
);
export default ChatBubble;
