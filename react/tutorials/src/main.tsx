import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import TasksProvider from "./contexts/TasksProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TasksProvider>
    <App />
  </TasksProvider>
);
