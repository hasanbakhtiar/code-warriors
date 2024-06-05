import React from "react";
import ReactDOM from "react-dom/client";
// ==============================bootstrap start==========================
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// ==============================bootstrap end==========================
// ==============================slick slider start==========================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ==============================slick slider end==========================
// slick slider end
import App from "./App";
import { Provider } from "react-redux";
import store from "./tools/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
