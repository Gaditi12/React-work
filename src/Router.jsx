import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutPage from "./component/AboutPage";
import AgeChecker from "./component/Agechecker";
import StopWatch from "./component/StopWatch";
import NewForm from "./component/NewForm";
import SignUpDialog from "./component/SignUpDialog";
import UseCallback from "./UseCallback";

export default function Routers() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/ageChecker">AgeChecker</Link>
          </li>
          <li>
            <Link to="/stopwatch">StopWatch</Link>
          </li>
          <li>
            <Link to="/form">Registration Form</Link>
          </li>
          <li>
            <Link to="/signUpDialog">SignUp Dialog box</Link>
          </li>
          <li>
            <Link to="/todo">todo-list</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/About" Component={AboutPage} />
          <Route path="/ageChecker" Component={AgeChecker} />
          <Route path="/stopwatch" Component={StopWatch} />
          <Route path="/form" Component={NewForm} />
          <Route path="/signUpDialog" Component={SignUpDialog} />
          <Route path="/todo" Component={UseCallback} />
        </Routes>
      </Router>
    </>
  );
}
