import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import "./i18n";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
