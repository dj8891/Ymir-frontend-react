import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChatInterfacePage from "./page/chat-interface/ChatInterfacePage";
import MainPage from "./navigation/MainPage";
import ErrorPage from "./page/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "dashboard/chats",
        element: <p>dashboard/chats</p>,
      },
      {
        path: "dashboard/reports",
        element: <p>dashboard/reports</p>,
      },
      {
        path: "moderators/members",
        element: <p>moderators/members</p>,
      },
      {
        path: "moderators/manage-moderator",
        element: <p>moderators/manage-moderator</p>,
      },
      {
        path: "database/database",
        element: <p>database/database</p>,
      },
      {
        path: "database/upload",
        element: <p>database/upload</p>,
      },
      {
        path: "settings/help-center",
        element: <p>settings/help-center</p>,
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
