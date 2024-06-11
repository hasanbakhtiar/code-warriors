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
import './sass/style.scss';
import App from "./App";
import { Provider } from "react-redux";
import store from "./tools/store";
import { branddata, cardata } from "./tools/func/calldata";


cardata();
branddata();


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
