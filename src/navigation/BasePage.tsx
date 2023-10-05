import React from "react";
import styled from 'styled-components';
import Colors from "../constants/colors";
import { ReactComponent as MenuIcon } from './assets/menu-icon.svg';
interface BasePageProps {
    className?: string,
    children?: any,
    title: string,
}

const BasePage: React.FC<BasePageProps> = styled(({ className, children, title }: BasePageProps) => {
    return (
        <div id="base-page" className={className}>
            <div className="title-area">
                <MenuIcon/>
                <h3>{title}</h3>
            </div>
            <div className="content-area">
                {children}
            </div>
        </div>
    )
})`
  height: 100%;
  width: 100%;
  
  .title-area {
    border-bottom: 1px solid ${Colors.navbarLightGrey};
    vertical-align: top;
    padding: 1.5rem;
    
    svg {
      display: inline;
      vertical-align: middle;
    }
    
    h3 {
      padding-left: 1rem;
      margin: 0;
      display: inline;
      vertical-align: middle;
    }
    
  }
  
`;

export default BasePage;