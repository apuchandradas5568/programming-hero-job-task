import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer, toast } from "react-toast";

import "./index.css";
import AuthProvider from "./AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer/>
      <App />
    </AuthProvider>
  </StrictMode>
);
