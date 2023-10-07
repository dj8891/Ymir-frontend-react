import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";
import {useTranslation} from "react-i18next";

interface ManageModeratorPageProps {
    className?: string,
}

const ManageModeratorPage = styled(({ className }: ManageModeratorPageProps) => {
    const { t } = useTranslation();
    return (
        <BasePage title={t('navigation.manageModerator')}>
            <span>Manage Moderator content will go here</span>
        </BasePage>
    )
})``;

export default ManageModeratorPage;