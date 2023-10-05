import React from "react";
import styled from 'styled-components';
import Navbar from "./components/Navbar";

const DashboardPage: React.FC = styled(({ className }: any) => {
    return (
        <div id="dashboard" className={className}>
            <Navbar/>
        </div>
    )
})`
  height: 100%;
  width: 100%;
`;

export default DashboardPage;