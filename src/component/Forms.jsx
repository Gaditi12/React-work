import React, { useState } from "react";

function Forms() {
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [fullemail, setFullEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [fullFeedback, setFullFeedback] = useState("");
  const [course, setCourse] = useState("");
  const [selectCourse, setSelectCourse] = useState("");
  function setInputValue(e) {
    e.preventDefault();
    setName(e.target.value);
    //console.log(e.target.value);
  }
  function setEmailValue(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function setfeedbackValue(e) {
    e.preventDefault();
    setFeedback(e.target.value);
  }

  function setCourseValue(e) {
    e.preventDefault();
    setCourse(e.target.value);
  }
  function handleSubmit() {
    setFullname(name);
    setFullEmail(email);
    setFullFeedback(feedback);
    setSelectCourse(course);
  }

  return (
    <>
      <div className="form">
        <h1>Registration Form</h1>
        <form action="">
          <label htmlFor="">Enter Your Name : </label>

          <input type="text" value={name} onChange={setInputValue} />
          <br />
          <br />
          <label>Enter Your email : </label>

          <input type="email" value={email} onChange={setEmailValue} />
          <br />
          <br />
          <label htmlFor="">Enter your feedback : </label>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={feedback}
            onChange={setfeedbackValue}
          ></textarea>
          <br />
          <label htmlFor="">Select your course</label>
          <select name="select" id="" value={course} onChange={setCourseValue}>
            <option>React JS</option>
            <option>Node JS</option>
            <option>MernStack web development</option>
            <option value="ROR">RoR</option>
          </select>
          <br />
          <br />
          <input type="button" onClick={handleSubmit} value="Submit" />
        </form>
      </div>

      <div className="info">
        <h2>Your Info</h2>
        <div>Name : {fullname}</div>
        <div>e-mail : {fullemail}</div>
        <div>Your feedback is : {fullFeedback}</div>
        <div>Selected course : {selectCourse}</div>
      </div>
    </>
  );
}
export default Forms;
