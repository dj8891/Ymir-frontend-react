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


interface DashboardNavbarProps {
    className?: string,
    activeNavItem: string,
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = styled(({ activeNavItem, className }: DashboardNavbarProps) => {

    const navItems = [
        {
            slug: 'dashboard',
            title: 'Dashboard',
            subRoutes: [
                {
                    url: 'dashboard/chats',
                    title: 'Chats',
                    icon: <ChatsIcon/>,
                },
                {
                    url: 'dashboard/reports',
                    title: 'Reports',
                    icon: <ReportsIcon/>,
                },
            ]
        },
        {
            slug: 'moderators',
            title: 'Moderators',
            subRoutes: [
                {
                    url: 'moderators/members',
                    title: 'Members',
                    icon: <ChatsIcon/>,
                },
                {
                    url: 'moderators/manage-moderator',
                    title: 'Manage Moderator',
                    icon: <ReportsIcon/>,
                },
            ]
        },
        {
            slug: 'database',
            title: 'Database',
            subRoutes: [
                {
                    url: 'database/database',
                    title: 'Database',
                    icon: <ChatsIcon/>,
                },
                {
                    url: 'database/upload',
                    title: 'Upload',
                    icon: <ReportsIcon/>,
                },
            ]
        },
        {
            slug: 'settings',
            title: 'Settings',
            subRoutes: [
                {
                    url: 'settings/help-center',
                    title: 'Help Center',
                    icon: <ChatsIcon/>,

                },
            ]
        },
    ];

    const currentNavItem = navItems.find(navItem => navItem.slug === activeNavItem);

    return (
        <div id="sub-nav" className={className}>

            <h5>{currentNavItem?.title}</h5>

            <ul className="sub-nav-items">

                    {currentNavItem?.subRoutes.map(subNavItem => {

                        return (
                            <li className="sub-nav-item">
                                <NavLink
                                    to={subNavItem.url}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                >
                                    {subNavItem.icon}
                                    <span>{subNavItem.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
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
    const [activeNavItem, setActiveNavItem] = React.useState('dashboard');
    return (
        <div id="navbar" className={className}>
            <div className="left-nav">
                <BotIcon className="bot-icon"/>

                <ul className="nav-items">
                    <li className="nav-item" onClick={() => setActiveNavItem('dashboard')}>
                        <DashboardIcon/>
                    </li>
                    <li className="nav-item" onClick={() => setActiveNavItem('moderators')}>
                        <TeammatesIcon/>
                    </li>
                    <li className="nav-item" onClick={() => setActiveNavItem('database')}>
                        <DocumentUploadIcon/>
                    </li>
                    <li className="nav-item" onClick={() => setActiveNavItem('settings')}>
                        <SettingsIcon/>
                    </li>
                </ul>

            </div>

            <div className="right-nav">
                <DashboardNavbar activeNavItem={activeNavItem}/>
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