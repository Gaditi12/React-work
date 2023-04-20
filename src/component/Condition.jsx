import React from "react";
import Green from "./Green";
import Blue from "./Blue";
function Condition() {
  let color;
  let isColorOf = true;
  if (isColorOf) {
    color = <Blue />;
  } else {
    color = <Green />;
  }
  return <>{color}</>;
}
export default Condition;
