import React from "react";
import styled from "styled-components";
import BasePage from "../../navigation/BasePage";
import { useTranslation } from "react-i18next";

interface ReportsPageProps {
  className?: string;
}

const ReportsPage = styled(({ className }: ReportsPageProps) => {
  const { t } = useTranslation();
  return (
    <BasePage title={t("navigation.reports")}>
      <span>Reports content will go here</span>
    </BasePage>
  );
})``;

export default ReportsPage;
