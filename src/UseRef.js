import React, { useRef, useState } from "react";

export default function UseRef() {
  //const refEle = useRef("");
  //const [name, setName] = useState("Aditi");

  // console.log(refEle);
  // function handleReset() {
  //   setName("");
  //   refEle.current.focus();
  // }
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    const a = ref.current.value;
    a === "" ? alert("Please fill the data") : setShow(true);
  };
  return (
    <>
      <h1>Learning useRef</h1>
      {/* <input
        ref={refEle}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button> */}
      <div>
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="name">Enter your name</label>
            <input type="text" id="name" ref={ref} />
          </div>
          <br />
          <button>Submit</button>
        </form>
        <p>{show ? `Your name is ${ref.current.value}` : ""}</p>
      </div>
    </>
  );
}
