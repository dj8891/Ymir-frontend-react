import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import BottomLayout from "./layout/bottom";
import MainLayout from "./layout/main";
import TopLayout from "./layout/top";
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
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TopLayout />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ flex: 1, overflow: "auto" }}>
          <Grid item xs={12}>
            <MainLayout />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BottomLayout />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;
