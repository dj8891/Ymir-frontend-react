import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";

interface ManageModeratorPageProps {
    className?: string,
}

const ManageModeratorPage = styled(({ className }: ManageModeratorPageProps) => {
    return (
        <BasePage title="Manage Moderator">
            <span>Manage Moderator content will go here</span>
        </BasePage>
    )
})``;

export default ManageModeratorPage;