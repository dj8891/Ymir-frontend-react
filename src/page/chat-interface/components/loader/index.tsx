import { Box } from "@material-ui/core";
import React from "react";
import logo from "../../assets/svg/logo.svg";
import "./style.css";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <Box className="window">
      <img src={logo} alt="logo" />
      <p>
        Ymir <br />
      </p>
    </Box>
  );
};

export default Loader;
