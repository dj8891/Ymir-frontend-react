import React from "react";
import styled from "styled-components";
import BasePage from "../../navigation/BasePage";
import { useTranslation } from "react-i18next";

interface HelpCenterPageProps {
  className?: string;
}

const HelpCenterPage = styled(({ className }: HelpCenterPageProps) => {
  const { t } = useTranslation();
  return (
    <BasePage title={t("navigation.helpCenter")}>
      <span>Help Center content will go here</span>
    </BasePage>
  );
})``;

export default HelpCenterPage;
