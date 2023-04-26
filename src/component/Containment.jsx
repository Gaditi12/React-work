import React from "react";
function Containment(props) {
  return (
    <>
      <div className="divBox">
        <div className="splitpane-left">{props.left}</div>
        <div className="splitpane-right">{props.right}</div>
      </div>
    </>
  );
}
export default Containment;
