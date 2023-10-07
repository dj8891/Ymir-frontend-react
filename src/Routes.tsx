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
import RegistrationPage from "./page/registraion/RegistrationPage";
import BaseRegistrationScreen from "./page/registraion/BaseRegistrationScreen";
import NameScreen from "./page/registraion/registration-flow/NameScreen";

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
          element: <BaseRegistrationScreen title="Your Address">Second Page Content</BaseRegistrationScreen>,
        },
        {
          path: "3",
          element: <BaseRegistrationScreen title="Company Information">Third Page Content</BaseRegistrationScreen>,
        },
        {
          path: "4",
          element: <BaseRegistrationScreen title="Plans">Fourth Page Content</BaseRegistrationScreen>,
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
