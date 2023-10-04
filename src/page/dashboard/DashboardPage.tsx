import React from "react";
import styled from 'styled-components';

const DashboardPage: React.FC = styled(({ className }: any) => {
    return (
        <div className={className}>
            something
        </div>
    )
})`
    .top-layout {
      background-color: blue; 
    }
`;

export default DashboardPage;