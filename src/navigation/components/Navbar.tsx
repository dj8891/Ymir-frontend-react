import React from "react";
import styled from 'styled-components';
import { ReactComponent as BotIcon } from '../assets/bot-icon.svg';

import Colors from "../../constants/colors";
import SecondaryNavbar from "./SecondaryNavbar";
import primaryNavItems from "./primaryNavItems";

const Navbar: React.FC = styled(({ className }: any) => {
    const [activeNavItem, setActiveNavItem] = React.useState('dashboard');

    return (
        <div id="navbar" className={className}>
            <div className="left-nav">
                <BotIcon className="bot-icon"/>

                <ul className="nav-items">
                    {primaryNavItems.map(navItem => (
                        <li className={activeNavItem === navItem.slug ? "active" : ""} onClick={() => setActiveNavItem(navItem.slug)}>
                            {navItem?.icon}
                        </li>
                    ))}
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
    background-color: ${Colors.navbarDarkGrey};
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
      
      li {
        padding: 0.75rem 0.5rem 0.75rem 0.4rem;
        border-left: 3px solid ${Colors.transparent};

        svg {
          color: ${Colors.black};
          fill: ${Colors.black};
        }

        &.active {
          background-color: ${Colors.navbarLightGrey};
          border-left: 3px solid ${Colors.activeBlue};
          
          svg {
            color: ${Colors.activeBlue};
            fill: ${Colors.activeBlue};
          }
        }
       
      }
    }
    
  }
  
  .right-nav {
    height: 100%;
    width: 8rem;
    display: inline-block;
    background-color: ${Colors.navbarLightGrey};
  }
`;

export default Navbar;