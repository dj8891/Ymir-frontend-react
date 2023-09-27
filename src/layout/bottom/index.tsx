import { Box, ButtonGroup, Grid, TextField } from "@material-ui/core";
import React from "react";
import EmojiButton from "../../components/buttons/emoji";
import UploadButton from "../../components/buttons/upload";
import "./style.css";
interface BottomLayoutProps {}

const BottomLayout: React.FC<BottomLayoutProps> = ({}) => {
  return (
    <Grid
      container
      className="bottom-layout"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={false} lg={2}></Grid>
      <Grid item xs={10} lg={8}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          marginRight={2}
        >
          <TextField
            variant="standard"
            fullWidth
            multiline
            placeholder="Type a reply..."
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "1.4rem" },
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={2} lg={2} spacing={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <ButtonGroup
            variant="outlined"
            color="default"
            aria-label="contained primary button group"
            className="button-group"
          >
            <EmojiButton />
            <UploadButton />
          </ButtonGroup>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BottomLayout;
