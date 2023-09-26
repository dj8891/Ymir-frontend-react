import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

interface AppProps {
  symbol: string;
}

const App: React.FC<AppProps> = ({ symbol }) => {
  const [appId, setAppId] = useState<string | null>(
    // @ts-expect-error
    window.myAppConfig && window.myAppConfig.appId
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get("appId");
    if (appId) setAppId(appId);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AppId: {appId} <br />
        </p>
      </header>
    </div>
  );
};

export default App;
