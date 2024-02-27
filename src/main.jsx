import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SearchProvider } from "./components/Context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <App />
  </SearchProvider>
);
