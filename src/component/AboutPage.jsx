import React from "react";

import { Route, Routes } from "react-router-dom";
import About123 from "./About123";
import ContactUs from "./ContactUs";
function AboutPage() {
  return (
    <>
      <h3>About</h3>
      <p>
        Hello there. <br />
        How do you do?
      </p>
      <Routes>
        <Route path="/" Component={About123} />
        <Route path="/contact" Component={ContactUs} />
      </Routes>
    </>
  );
}
export default AboutPage;
