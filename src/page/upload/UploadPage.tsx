import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";
import {useTranslation} from "react-i18next";

interface UploadPageProps {
    className?: string,
}

const UploadPage = styled(({ className }: UploadPageProps) => {
    const { t } = useTranslation();
    return (
        <BasePage title={t('navigation.upload')}>
            <span>Upload content will go here</span>
        </BasePage>
    )
})``;

export default UploadPage;