import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";

interface HelpCenterPageProps {
    className?: string,
}

const HelpCenterPage = styled(({ className }: HelpCenterPageProps) => {
    return (
        <BasePage title="Help Center">
            <span>Help Center content will go here</span>
        </BasePage>
    )
})``;

export default HelpCenterPage;