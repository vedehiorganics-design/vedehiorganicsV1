/*import { ViteSSG } from "vite-ssg";
import App from "./App";
import { routes } from "./routes";
import "./index.css";

export const createApp = ViteSSG(App, { routes });

import React from "react";
import ReactDOM from "react-dom/client";

const Test = () => {
  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      ✅ React is rendering correctly
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);

*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);