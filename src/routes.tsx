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
  ];
};

export default Routes;
