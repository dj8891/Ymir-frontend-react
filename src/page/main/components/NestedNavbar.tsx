import React from "react";
import styled from 'styled-components';
import Colors from "../../../constants/colors";

const NestedNavbar: React.FC = styled(({ className }: any) => {
    return (
        <div id="nested-navbar" className={className}>

            <div className="nested-nav-items">

                <div className="nav-item">

                </div>

            </div>
        </div>
    )
})`
  height: 100%;
  width: 7rem;
  display: inline-block;
  background-color: ${Colors.navbarDarkGrey};

  .nav-items {
    
  }
`;

export default NestedNavbar;