import React from "react";
import styled from 'styled-components';
import { ReactComponent as BotIcon } from './assets/bot-icon.svg';
import Colors from "../../constants/colors";

const DashboardPage: React.FC = styled(({ className }: any) => {
    return (
        <div id="dashboard" className={className}>
            <div className="navbar">
                <BotIcon/>
            </div>
        </div>
    )
})`
  height: 100%;
  width: 100%;
  
    .navbar {
      height: 100%;
      width: 3rem;
      background-color: ${Colors.navbarGrey}; 
    }
`;

export default DashboardPage;