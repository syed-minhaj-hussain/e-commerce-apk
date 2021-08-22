import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { WishCartProvider } from "./context/WishCartContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <WishCartProvider>
          <App />
        </WishCartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
