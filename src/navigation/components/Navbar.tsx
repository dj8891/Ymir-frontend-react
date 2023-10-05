import React from "react";
import styled from 'styled-components';
import { ReactComponent as BotIcon } from '../assets/bot-icon.svg';
import { ReactComponent as DashboardIcon } from '../assets/dashboard-icon.svg';
import { ReactComponent as DocumentUploadIcon } from '../assets/document-upload-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as TeammatesIcon } from '../assets/teammates-icon.svg';

import { ReactComponent as ChatsIcon } from '../assets/chats-icon.svg';
import { ReactComponent as ReportsIcon } from '../assets/reports-icon.svg';

import Colors from "../../constants/colors";

import {
    NavLink,
} from "react-router-dom";


const DashboardNavbar: React.FC = styled(({ className }: any) => {

    return (
        <div id="sub-nav" className={className}>

            <h5>Dashboard</h5>

            <ul className="sub-nav-items">

                <li className="sub-nav-item">

                    <NavLink
                        to={`dashboard/chats`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }
                    >
                        <ChatsIcon/>
                        <span>Chats</span>
                    </NavLink>

                </li>

                <li className="sub-nav-item">

                    <NavLink
                        to={`dashboard/reports`}
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }
                    >
                        <ReportsIcon/>
                        <span>Reports</span>
                    </NavLink>

                </li>
            </ul>
        </div>
    )
})`
    h5 {
      padding: 1.75rem 0.75rem;
      margin: 0;
    }
  
    ul.sub-nav-items {
      list-style-type: none;
      margin: 0;
      padding: 0;
      
      li {
        width: 86%;
        margin-top: 0.5rem;
        
        a {
          color: ${Colors.black};
          text-decoration: none;
          width: 100%;
          display: inline-block;
          border-radius: 0.25rem;
          padding: 0.25rem;
          margin-left: 0.25rem;
          
          svg {
            vertical-align: middle;
          }
          
          span {
            padding-left: 0.5rem;
            vertical-align: middle;
          }
          
          &.active {
            color: ${Colors.activeBlue};
            background-color: ${Colors.backgroundWhite};
          }
        }
      }
      
    }
  
`;


const Navbar: React.FC = styled(({ className }: any) => {
    return (
        <div id="navbar" className={className}>
            <div className="left-nav">
                <BotIcon className="bot-icon"/>

                <ul className="nav-items">
                    <li className="nav-item">
                        <DashboardIcon/>
                    </li>
                    <li className="nav-item">
                        <TeammatesIcon/>
                    </li>
                    <li className="nav-item">
                        <DocumentUploadIcon/>
                    </li>
                    <li className="nav-item">
                        <SettingsIcon/>
                    </li>
                </ul>

            </div>

            <div className="right-nav">
                <DashboardNavbar/>
            </div>

        </div>
    )
})`
  height: 100%;
  display: inline-block;
  
  .left-nav {
    height: 100%;
    width: 3rem;
    background-color: ${Colors.navbarLightGrey};
    display: inline-block;
    text-align: center;
    float: left;
    
    .bot-icon {
      margin-top: 1rem;
    }
    
    .nav-items {
      list-style-type: none;
      margin-top: 3.5rem;
      padding: 0;
      
      .nav-item {
        margin-bottom: 1rem;
        
        svg {
          color: black;
          fill: black;
        }
      }
    }
    
  }
  
  .right-nav {
    height: 100%;
    width: 8rem;
    display: inline-block;
    background-color: ${Colors.navbarDarkGrey};
  }
 
`;

export default Navbar;