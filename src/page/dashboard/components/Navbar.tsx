import React from "react";
import styled from 'styled-components';
import { ReactComponent as BotIcon } from '../assets/bot-icon.svg';
import Colors from "../../../constants/colors";

const NavItems = [
    {

    }
];

const Navbar: React.FC = styled(({ className }: any) => {
    return (
        <div id="navbar" className={className}>
            <BotIcon/>

            <div className="nav-items">
            </div>
        </div>
    )
})`
  height: 100%;
  width: 3rem;
  background-color: ${Colors.navbarGrey}; 
`;

export default Navbar;