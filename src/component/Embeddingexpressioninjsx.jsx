import React from "react";

function Formatname() {
  const user = {
    firstName: "Aditi",
    lastName: "Gupta",
  };
  function Addname() {
    return user.firstName + " " + user.lastName;
  }

  return (
    <>
      <p className="embeddedjsx">
        hello, {Addname()} <br /> Welcome to react tutorial.
      </p>
    </>
  );
}

export default Formatname;
