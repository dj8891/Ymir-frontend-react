import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// The issue with using a common id like “root” for injecting widgets, as it may clash with other elements with the same id,
//  and emphasizes using class identifiers and data attributes to dynamically inject multiple instances of a widget into divs,
//  allowing for more flexibility and control over parameters.
const widgetDivs: NodeListOf<HTMLDivElement> =
  document.querySelectorAll(".ymir-widget");

widgetDivs.forEach((div: HTMLDivElement) => {
  ReactDOM.render(
    <React.StrictMode>
      <App symbol={div.dataset.symbol ?? ""} />
    </React.StrictMode>,
    div
  );
});

reportWebVitals();
