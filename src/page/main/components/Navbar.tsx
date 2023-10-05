import React from "react";
import styled from 'styled-components';
import { ReactComponent as BotIcon } from '../assets/bot-icon.svg';
import Colors from "../../../constants/colors";

const NavItems = [

    {
        title: 'Dashboard',
        slug: 'main',
        url: '/dashboard',
        subItems: []
    },

    {
        title: 'Moderators',
        slug: 'moderators',
        url: '/moderators',
        subItems: []
    },

    {
        title: 'Database',
        slug: 'main',
        url: '/dashboard',
        subItems: []
    },

    {
        title: 'Dashboard',
        slug: 'main',
        url: '/dashboard',
        subItems: []
    },

];

const Navbar: React.FC = styled(({ className }: any) => {
    return (
        <div id="navbar" className={className}>
            <BotIcon/>

            <div className="nav-items">

                <div className="nav-item">

                </div>

            </div>
        </div>
    )
})`
  height: 100%;
  width: 3rem;
  background-color: ${Colors.navbarLightGrey}; 
  display: inline-block;
  float: left;
  
  .nav-items {
    
  }
`;

export default Navbar;