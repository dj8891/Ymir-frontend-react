import React from "react";
import styled from 'styled-components';
import { ReactComponent as BotIcon } from '../assets/bot-icon.svg';
import { ReactComponent as DashboardIcon } from '../assets/dashboard-icon.svg';
import { ReactComponent as DocumentUploadIcon } from '../assets/document-upload-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as TeammatesIcon } from '../assets/teammates-icon.svg';
import Colors from "../../constants/colors";
import SecondaryNavbar from "./SecondaryNavbar";

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
                <SecondaryNavbar activeNavItem={activeNavItem}/>
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