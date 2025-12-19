import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


window.React = React;
window.ReactDOM = ReactDOM;

function waitForRoot() {
  const root = document.getElementById("smart-job-tracker-sidebar-root");
  if (root) {
    ReactDOM.createRoot(root).render(<App />);
  } else {
    console.log("Root not found, retrying...");
    setTimeout(waitForRoot, 100);
  }
}

waitForRoot();
