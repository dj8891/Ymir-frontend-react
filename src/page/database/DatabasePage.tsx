import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";

interface DatabasePageProps {
    className?: string,
}

const DatabasePage: React.FC<DatabasePageProps> = styled(({ className }: DatabasePageProps) => {
    return (
        <BasePage title="Database">
            <span>Database content will go here</span>
        </BasePage>
    )
})``;

export default DatabasePage;