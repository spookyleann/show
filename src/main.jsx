import React from "react";
import { createRoot } from "react-dom/client";
import App from "../showflip-portfolio.jsx";

if (!window.storage) {
  window.storage = {
    async get(key) {
      return { value: localStorage.getItem(key) };
    },
    async set(key, value) {
      localStorage.setItem(key, value);
    },
  };
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
