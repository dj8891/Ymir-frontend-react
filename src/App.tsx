import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChatInterfacePage from "./page/chat-interface/ChatInterfacePage";
import MainPage from "./page/main/MainPage";
import ErrorPage from "./page/error/ErrorPage";
import NestedNavbar from "./page/main/components/NestedNavbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "dashboard/",
        element: <NestedNavbar />,
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
