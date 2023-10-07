import { Box, Grid } from "@material-ui/core";
import React from "react";
import ChatBubble from "../../components/chatBubble/chatBubble";
import "./style.css";

interface Message {
  text: string;
  user: "userA" | "userB";
  avatar: string;
}

//TODO: This old file will likely need an overhaul, I'm not going to add localization to it for now.
const messages: Message[] = [
  {
    text: "Hello! I hope you are having a great day. I wanted to talk to you about something important. Do you have some time to chat-interface?",
    user: "userA",
    avatar: "https://example.com/avatar1.png",
  },
  {
    text: "Hi! Yes, I am having a good day, thank you. I'm glad to hear from you. I am available right now. Feel free to share what's on your mind.",
    user: "userB",
    avatar: "https://example.com/avatar2.png",
  },
  {
    text: "That's great to hear! I am planning a surprise birthday party for our friend Alex. I wanted to discuss the arrangements and see if you would like to help with the planning and preparation.",
    user: "userA",
    avatar: "https://example.com/avatar1.png",
  },
  {
    text: "Oh, that sounds like a fantastic idea! I would love to help with the planning and preparation. Let's make it a memorable birthday celebration for Alex!",
    user: "userB",
    avatar: "https://example.com/avatar2.png",
  },
  {
    text: "Awesome! I am thinking of hosting the party at Alex’s favorite restaurant. I will make the reservation. Can you please take care of the decorations?",
    user: "userA",
    avatar: "https://example.com/avatar1.png",
  },
  {
    text: "Certainly! I will get the decorations sorted. Should I also order a cake?",
    user: "userB",
    avatar: "https://example.com/avatar2.png",
  },
  {
    text: "Yes, please order a chocolate cake, Alex's favorite! Also, let's keep this a secret until the day of the celebration.",
    user: "userA",
    avatar: "https://example.com/avatar1.png",
  },
  {
    text: "Understood, everything will be ready, and it will be a great surprise! Looking forward to it.",
    user: "userB",
    avatar: "https://example.com/avatar2.png",
  },
];

const MainLayout: React.FC = () => {
  return (
    <Box className="main-layout">
      <Grid container>
        <Grid item xs={false} lg={2}></Grid>
        <Grid item xs={12} lg={8}>
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              text={message.text}
              user={message.user}
              avatar={message.avatar}
            />
          ))}
        </Grid>
        <Grid item xs={false} lg={2}></Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
