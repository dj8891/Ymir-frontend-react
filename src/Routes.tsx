import MainPage from "./navigation/MainPage";
import ErrorPage from "./page/error/ErrorPage";
import ChatsPage from "./page/chats/ChatsPage";
import ReportsPage from "./page/reports/ReportsPage";
import MembersPage from "./page/members/MembersPage";
import ManageModeratorPage from "./page/manage-moderator/ManageModeratorPage";
import DatabasePage from "./page/database/DatabasePage";
import UploadPage from "./page/upload/UploadPage";
import HelpCenterPage from "./page/help-center/HelpCenterPage";
import ChatInterfacePage from "./page/chat-interface/ChatInterfacePage";
import React from "react";
import LoginPage from "./page/login/LoginPage";
import RegistrationPage from "./page/registration/RegistrationPage";
import BaseRegistrationScreen from "./page/registration/BaseRegistrationScreen";
import NameScreen from "./page/registration/registration-flow/NameScreen";
import AddressScreen from "./page/registration/registration-flow/AddressScreen";
import CompanyInformationScreen from "./page/registration/registration-flow/CompanyInformationScreen";
import PlanSelectionScreen from "./page/registration/registration-flow/PlanSelectionScreen";

interface SubRoute {
  path: string;
  element: JSX.Element;
}

interface Route {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: Array<SubRoute>;
}

const Routes = (): Array<Route> => {
  return [
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "dashboard/chats",
          element: <ChatsPage />,
        },
        {
          path: "dashboard/reports",
          element: <ReportsPage />,
        },
        {
          path: "moderators/members",
          element: <MembersPage />,
        },
        {
          path: "moderators/manage-moderator",
          element: <ManageModeratorPage />,
        },
        {
          path: "database/database",
          element: <DatabasePage />,
        },
        {
          path: "database/upload",
          element: <UploadPage />,
        },
        {
          path: "settings/help-center",
          element: <HelpCenterPage />,
        },
      ],
    },
    {
      path: "/chat-interface",
      element: <ChatInterfacePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/registration",
      element: <RegistrationPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "1",
          element: <NameScreen />,
        },
        {
          path: "2",
          element: <AddressScreen />,
        },
        {
          path: "3",
          element: <CompanyInformationScreen />,
        },
        {
          path: "4",
          element: <PlanSelectionScreen />,
        },
        {
          path: "5",
          element: <BaseRegistrationScreen title="Payment">Fifth Page Content</BaseRegistrationScreen>,
        },
        {
          path: "6",
          element: <BaseRegistrationScreen title="Preparing Dashboard">Sixth Page Content</BaseRegistrationScreen>,
        },
        {
          path: "7",
          element: <BaseRegistrationScreen title="Describe Company">Seventh Page Content</BaseRegistrationScreen>,
        },
        {
          path: "8",
          element: <BaseRegistrationScreen title="Upload Data">Eighth Page Content</BaseRegistrationScreen>,
        },
        {
          path: "9",
          element: <BaseRegistrationScreen title="Customize Bot">Ninth Page Content</BaseRegistrationScreen>,
        },
        {
          path: "10",
          element: <BaseRegistrationScreen title="Test Bot">Tenth Page Content</BaseRegistrationScreen>,
        },
        {
          path: "10",
          element: <BaseRegistrationScreen title="Add A Member">Eleventh Page Content</BaseRegistrationScreen>,
        },
      ],
    },
  ];
};

export default Routes;
