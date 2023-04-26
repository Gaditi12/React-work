import React, { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {
  const [state, setState] = useState("");
  function handleChange(e) {
    setState(e.target.value);
  }
  function handleSignUp() {
    alert(`Welcome, ${state}`);
  }
  return (
    <>
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input type="text" value={state} onChange={handleChange} />
        <button onClick={handleSignUp}>SignUp</button>
      </Dialog>
    </>
  );
}
export default SignUpDialog;
