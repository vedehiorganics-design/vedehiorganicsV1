/*import { ViteSSG } from "vite-ssg";
import App from "./App";
import { routes } from "./routes";
import "./index.css";

export const createApp = ViteSSG(App, { routes });
*/
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);


