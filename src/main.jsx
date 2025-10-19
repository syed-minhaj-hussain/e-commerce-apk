import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { WishCartProvider } from "./context/WishCartContext";
import { ToastProvider } from "./context/ToastContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ToastProvider>
        <AuthProvider>
          <WishCartProvider>
            <App />
          </WishCartProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </StrictMode>
);
