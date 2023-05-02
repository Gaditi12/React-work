import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Demo from "./Demo";
import UseRef from "./UseRef";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Demo />
    <UseRef />
  </>
);
