import React from "react";
import styled from "styled-components";
import BasePage from "../../navigation/BasePage";
import { useTranslation } from "react-i18next";

interface MembersPageProps {
  className?: string;
}

const MembersPage = styled(({ className }: MembersPageProps) => {
  const { t } = useTranslation();

  return (
    <BasePage title={t("navigation.members")}>
      <span>Members content will go here</span>
    </BasePage>
  );
})``;

export default MembersPage;
