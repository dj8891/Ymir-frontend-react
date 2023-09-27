import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import avatar from "../../assets/svg/avatar.svg";
import badge from "../../assets/svg/badge.svg";
import "./style.css";

interface TopLayoutProps {}

const TopLayout: React.FC<TopLayoutProps> = ({}) => {
  return (
    <Box
      className="top-layout"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingLeft={5}
      paddingRight={5}
    >
      <Grid container spacing={0}>
        <Grid item xs={false} lg={2}></Grid>
        <Grid item xs={2}>
          <Box
            className="top-layout"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
            sx={{
              width: {
                xs: "100%",
                lg: "60%",
              },
            }}
          >
            <img src={avatar} alt="avatar Icon" width="100%" />
          </Box>
        </Grid>
        <Grid item xs={10} lg={6}>
          <Box
            className="top-layout"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6" style={{ marginRight: "10px" }}>
                    Chat name
                  </Typography>
                  <img src={badge} alt="badge Icon" width={50} />
                  <Typography style={{ marginLeft: "10px" }}>Bot</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Typography>Area of work</Typography>
              </Grid>
              {/* <Grid item xs={6}>
                <Typography>location</Typography>{" "}
              </Grid> */}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} lg={2}></Grid>
      </Grid>
    </Box>
  );
};

export default TopLayout;
