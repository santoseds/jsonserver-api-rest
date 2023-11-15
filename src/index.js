import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//rendiriza o componente "<App/>" dentro de  " <React.StrictMode>", para ajudar  a encotrar bugs comuns no processo de desenvolvimento
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
