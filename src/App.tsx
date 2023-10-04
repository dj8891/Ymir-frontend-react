import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChatInterface from "./page/chat-interface/ChatInterface";

interface AppProps {
  symbol: string;
}

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <div>Dashboard</div>,
  },
  {
    path: "/chat-interface",
    element: <ChatInterface/>,
  },
]);

const App: React.FC<AppProps> = ({ symbol }) => {
  return (
      <div className="ymir-app">
        <RouterProvider router={router}/>
      </div>
  )
};

export default App;
