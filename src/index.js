import React from "react";
import ReactDOM from "react-dom";
import App from "./js/react/App";

const contentWrapper = document.getElementById("react-entry-point");

if (contentWrapper) {
    ReactDOM.render(<App />, contentWrapper);
}