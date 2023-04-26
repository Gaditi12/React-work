import React, { useState } from "react";
function NewForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [course, setCourse] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function handleFeedback(e) {
    e.preventDefault();
    setFeedback(e.target.value);
  }
  function handleCourse(e) {
    e.preventDefault();
    setCourse(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newEntry = {
      name: name,
      email: email,
      feedback: feedback,
      course: course,
    };
    setAllEntry([...allEntry, newEntry]);
  }
  return (
    <>
      <div className="newForm">
        <h2>REGISTRATION FORM</h2>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Enter Your Name : </label>
          <input type="text" name="name" value={name} onChange={handleName} />
          <br />
          <br />
          <label htmlFor="email">Enter your email : </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          <br />
          <br />
          <label htmlFor="feedback">Your feedback : </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Enter yor feedback"
            value={feedback}
            onChange={handleFeedback}
          ></textarea>
          <br />
          <br />
          <label htmlFor="">Select Courses : </label>
          <select name="course" id="" value={course} onChange={handleCourse}>
            <option value=""></option>
            <option value="React js">React JS</option>
            <option value="nodejs">node JS</option>
            <option value="ror">Ror</option>
            <option value="android">Android development</option>
          </select>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {allEntry.map((element) => {
          return (
            <>
              <div className="anotherForm">
                <p>
                  <strong>Name : </strong>
                  {element.name}
                </p>
                <p>
                  <strong>E-mail : </strong>
                  {element.email}
                </p>
                <p>
                  <strong>Feedback : </strong>
                  {element.feedback}
                </p>
                <p>
                  <strong>Courses : </strong>
                  {element.course}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default NewForm;
