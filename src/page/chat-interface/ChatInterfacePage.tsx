import { Box, Grid } from "@material-ui/core";
import React from "react";
import "./ChatInterface.css";
import BottomLayout from "./layout/bottom";
import MainLayout from "./layout/main";
import TopLayout from "./layout/top";

const ChatInterfacePage: React.FC = () => (
  <Box style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <TopLayout />
      </Grid>
    </Grid>
    <Grid container spacing={2} style={{ flex: 1, overflow: "auto" }}>
      <Grid item xs={12}>
        <MainLayout />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <BottomLayout />
      </Grid>
    </Grid>
  </Box>
);

export default ChatInterfacePage;
