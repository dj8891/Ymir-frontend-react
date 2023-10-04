import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChatInterfacePage from "./page/chat-interface/ChatInterfacePage";
import DashboardPage from "./page/dashboard/DashboardPage";
import ErrorPage from "./page/error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>
  },
  {
    path: "/dashboard",
    element: <DashboardPage/>,
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
