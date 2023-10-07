import React from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ErrorPage = styled(({ className }: any) => {
  const error: unknown = useRouteError();
  const { t } = useTranslation();
  console.error(error);

  return (
    <div id="error-page" className={className}>
      <h1>{t("errorPage.oops")}</h1>
      <p>{t("errorPage.unexpectedError")}</p>
    </div>
  );
})`
  padding-top: 10%;

  h1,
  p {
    text-align: center;
  }
`;

export default ErrorPage;
