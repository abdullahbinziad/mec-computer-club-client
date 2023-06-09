import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
