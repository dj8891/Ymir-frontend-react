import { Box } from "@material-ui/core";
import React from "react";
import Loader from "../../components/loader";
import "./style.css";

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({}) => {
  return (
    <Box className="main-layout">
      <Loader />
    </Box>
  );
};

export default MainLayout;
