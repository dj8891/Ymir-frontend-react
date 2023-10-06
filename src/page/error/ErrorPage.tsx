import React from "react";
import { useRouteError } from "react-router-dom";
import styled from 'styled-components';

const ErrorPage = styled(({ className }: any) => {
    const error: unknown = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className={className}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
})`
  
    h1, p {
      text-align: center;
    }
    
`;

export default ErrorPage;