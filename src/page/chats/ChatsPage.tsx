import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";
import { useTranslation } from "react-i18next";

interface ChatsPageProps {
    className?: string,
}

const ChatsPage: React.FC<ChatsPageProps> = styled(({ className }: ChatsPageProps) => {
    const { t } = useTranslation();

    return (
        <BasePage title={t('navigation.chats')}>
            <span>Chats content will go here</span>
        </BasePage>
    )
})``;

export default ChatsPage;