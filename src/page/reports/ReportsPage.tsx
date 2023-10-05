import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";

interface ReportsPageProps {
    className?: string,
}

const ReportsPage: React.FC<ReportsPageProps> = styled(({ className }: ReportsPageProps) => {
    return (
        <BasePage title="Reports">
            <span>Reports content will go here</span>
        </BasePage>
    )
})``;

export default ReportsPage;