import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import avatar from "../../assets/svg/avatar.svg";
import badge from "../../assets/svg/badge.svg";
import "./style.css";

const TopLayout: React.FC = () => {
  return (
    <Box
      className="top-layout"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={3}
      sx={{ width: "100%" }}
    >
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                width: {
                  xs: "30%",
                  lg: "20%",
                },
                paddingLeft: {
                  xs: "2px",
                  lg: "0px",
                },
              }}
            >
              <img src={avatar} alt="avatar Icon" width="90px" />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              sx={{
                width: {
                  xs: "70%",
                  lg: "80%",
                },
              }}
            >
              <Box display="flex" alignItems="center" marginRight={5}>
                <span className="chat-name">Chat name</span>
                <Box
                  display="flex"
                  sx={{
                    display: {
                      xs: "none",
                      lg: "flex",
                    },
                  }}
                  margin={0}
                >
                  <img src={badge} alt="badge Icon" className="ymir-badge" />
                  <Typography>Bot</Typography>
                </Box>
              </Box>
              <Box display="flex">
                <span className="area-of-work">Area of work</span>
              </Box>
              <Box
                display="flex"
                sx={{
                  display: {
                    xs: "flex",
                    lg: "none",
                  },
                }}
                margin={0}
              >
                <img src={badge} alt="badge Icon" className="ymir-badge" />
                <Typography style={{ fontSize: "12px" }}>Bot</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopLayout;
