import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Demo from "./Demo";
import UseRef from "./UseRef";
import Counter from "./UseReducer";
import UseCallback from "./UseCallback";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Demo />
    <UseRef />
    <Counter />
  </>
);
