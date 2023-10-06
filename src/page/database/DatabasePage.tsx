import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";
import { useTranslation } from "react-i18next";

interface DatabasePageProps {
    className?: string,
}

const DatabasePage: React.FC<DatabasePageProps> = styled(({ className }: DatabasePageProps) => {
    const { t } = useTranslation();
    return (
        <BasePage title={t('navigation.database')}>
            <span>Database content will go here</span>
        </BasePage>
    )
})``;

export default DatabasePage;