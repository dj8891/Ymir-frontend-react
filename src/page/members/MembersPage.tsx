import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";

interface MembersPageProps {
    className?: string,
}

const MembersPage = styled(({ className }: MembersPageProps) => {
    return (
        <BasePage title="Members">
            <span>Members content will go here</span>
        </BasePage>
    )
})``;

export default MembersPage;