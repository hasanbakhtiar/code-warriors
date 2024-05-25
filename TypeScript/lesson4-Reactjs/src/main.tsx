import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/DataContext";
import AppUseImperativeHandle from "./components/AppUseImperativeHandle";
import AppUseMemo from "./components/AppUseMemo";
import AppUseLayoutEffect from "./components/AppUseLayoutEffect";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <DataProvider>
      <App />
    </DataProvider> */}
    {/* <AppUseMemo /> */}
    {/* <AppUseLayoutEffect /> */}
    <AppUseImperativeHandle />

  </React.StrictMode>
);
