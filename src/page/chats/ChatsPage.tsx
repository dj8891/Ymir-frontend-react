import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";

interface ChatsPageProps {
    className?: string,
}

const ChatsPage: React.FC<ChatsPageProps> = styled(({ className }: ChatsPageProps) => {
    return (
        <BasePage title="Chats">
            <span>Chats content will go here</span>
        </BasePage>
    )
})``;

export default ChatsPage;