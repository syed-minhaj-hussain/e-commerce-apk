import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WishCartProvider } from "./context/WishCartContext";

ReactDOM.render(
  <React.StrictMode>
    <WishCartProvider>
      <App />
    </WishCartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
