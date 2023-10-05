import React from "react";
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Colors from "../constants/colors";

const MainPage: React.FC = styled(({ className }: any) => {
    return (
        <div id="main-page" className={className}>
            <Navbar/>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
})`
  height: 100%;
  width: 100%;
  vertical-align: top;
  
  .main-content {
    width: calc(100% - 10rem);
    height: 100%;
    background-color: ${Colors.backgroundWhite};
    display: inline-block;
    vertical-align: top;
  }
`;

export default MainPage;