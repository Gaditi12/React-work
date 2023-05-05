import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutPage from "./component/AboutPage";
import AgeChecker from "./component/Agechecker";
import StopWatch from "./component/StopWatch";
import NewForm from "./component/NewForm";
import SignUpDialog from "./component/SignUpDialog";
import UseCallback from "./UseCallback";
import Accessibility from "./component/Accessibility";
import UseEffectApi from "./component/UseEffectApi";
import UseMemo from "./component/UseMemo";
import Test from "./component/Test";
import UseEffect from "./component/UseEffect";
import Image from "./component/Image";
import List1 from "./component/List1";
import List2 from "./component/List2";
import List3 from "./component/List3";
import DisplayingData from "./component/DisplayingData";
import Condition from "./component/Condition";
import Embeddingexpressioninjsx from "./component/Embeddingexpressioninjsx";
import Hooks from "./component/Hooks";

export default function Routers() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/food-img">Image</Link>
          </li>
          <li>
            <Link to="/hedy">Hedy Lamarr</Link>
          </li>
          <li>
            <Link to="/conditional-rendering">Conditional Rendering</Link>
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
          <li>
            <Link to="/accessibility">Accessibility</Link>
          </li>
          <li>
            <Link to="/useEffect">Learn useEffect</Link>
          </li>
          <li>
            <Link to="/fetchdata">Fetched data</Link>
          </li>
          <li>
            <Link to="/usememo">Learn useMemo</Link>
          </li>
          <li>
            <Link to="/customhook">Custom Hook</Link>
          </li>
          <li>
            <Link to="/list1">List-1</Link>
          </li>
          <li>
            <Link to="/list2">List-2</Link>
          </li>
          <li>
            <Link to="/list3">List-3</Link>
          </li>
          <li>
            <Link to="/embeddedinjsx">Embedded Expressions in jsx</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/About" Component={AboutPage} />
          <Route path="/food-img" Component={Image} />
          <Route path="/hedy" Component={DisplayingData} />
          <Route path="/conditional-rendering" Component={Condition} />
          <Route path="/ageChecker" Component={AgeChecker} />
          <Route path="/stopwatch" Component={StopWatch} />
          <Route path="/form" Component={NewForm} />
          <Route path="/signUpDialog" Component={SignUpDialog} />
          <Route path="/todo" Component={UseCallback} />
          <Route path="/accessibility" Component={Accessibility} />
          <Route path="/useEffect" Component={UseEffect} />
          <Route path="/fetchData" Component={UseEffectApi} />
          <Route path="/usememo" Component={UseMemo} />
          <Route path="/customhook" Component={Test} />
          <Route path="/list1" Component={List1} />
          <Route path="/list2" Component={List2} />
          <Route path="/list3" Component={List3} />
          <Route path="/embeddedinjsx" Component={Embeddingexpressioninjsx} />
          <Route path="/hooks" Component={Hooks} />
        </Routes>
      </Router>
    </>
  );
}
