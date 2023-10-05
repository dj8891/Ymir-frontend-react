import React from "react";
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const MainPage: React.FC = styled(({ className }: any) => {
    return (
        <div id="main-page" className={className}>
            <Navbar/>
            <Outlet />
        </div>
    )
})`
  height: 100%;
  width: 100%;
`;

export default MainPage;