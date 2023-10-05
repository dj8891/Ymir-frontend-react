import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChatInterfacePage from "./page/chat-interface/ChatInterfacePage";
import MainPage from "./navigation/MainPage";
import BasePage from "./navigation/BasePage";
import ErrorPage from "./page/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "dashboard/chats",
        element: <BasePage title="Chats"/>,
      },
      {
        path: "dashboard/reports",
        element: <BasePage title="Reports"/>,
      },
      {
        path: "moderators/members",
        element: <BasePage title="Members"/>,
      },
      {
        path: "moderators/manage-moderator",
        element: <BasePage title="Manage Moderator"/>,
      },
      {
        path: "database/database",
        element: <BasePage title="Database"/>,
      },
      {
        path: "database/upload",
        element: <BasePage title="Upload"/>,
      },
      {
        path: "settings/help-center",
        element: <BasePage title="Help Center"/>,
      },
    ],
  },
  {
    path: "/chat-interface",
    element: <ChatInterfacePage/>,
  },
]);

const App: React.FC = () => {
  return (
      <div className="ymir-app">
        <RouterProvider router={router}/>
      </div>
  )
};

export default App;
