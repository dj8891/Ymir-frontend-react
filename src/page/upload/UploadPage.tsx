import React from "react";
import styled from 'styled-components';
import BasePage from "../../navigation/BasePage";

interface UploadPageProps {
    className?: string,
}

const UploadPage: React.FC<UploadPageProps> = styled(({ className }: UploadPageProps) => {
    return (
        <BasePage title="Upload">
            <span>Upload content will go here</span>
        </BasePage>
    )
})``;

export default UploadPage;