import React, { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./component/Welcome";
import Button from "./component/Button";
import AboutPage from "./component/AboutPage";
import Image from "./component/Image";
import Formatname from "./component/Embeddingexpressioninjsx";
import DisplayData from "./component/DisplayingData";
import Condition from "./component/Condition";
import Tick from "./component/Tick";
import Comment from "./component/Comment";
import ContactInfo from "./component/ContactInfo";
import contacts from "./component/Contact";
import MyButton from "./component/Events";
import Hooks from "./component/Hooks";
import Containment from "./component/Containment";
import FirstDiv from "./component/FirstDiv";
import SecondDiv from "./component/SecondDiv";
import SignUpDialog from "./component/SignUpDialog";
import Person from "./component/Person";
import people from "./component/People";
import Accessibility from "./component/Accessibility";
import Example from "./component/UseEffect";
import FetchData from "./component/UseEffectApi";
import ComA from "./component/ComA";
import StopWatch from "./component/StopWatch";
import Memo from "./component/UseMemo";
const FirstName = createContext();
const LastName = createContext();
const comment = {
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

function createConatct(contact) {
  return (
    <ContactInfo
      id={contact.id}
      key={contact.id}
      name={contact.name}
      imageURL={contact.imgUrl}
    />
  );
}

function personDetail(detail) {
  return (
    <Person
      id={detail.id}
      key={detail.id}
      imgUrl={detail.imgUrl}
      name={detail.name}
      profession={detail.profession}
    />
  );
}
function App() {
  return (
    <>
      <Welcome name="Aditi" />
      <Button />
      <MyButton />

      <Formatname />
      <Tick />
      <Image />
      <DisplayData />
      <Condition />

      <Comment photo={comment.author} text={comment.text} />
      <div>
        <h2>One-piece Anime Character</h2>
        {contacts.map(createConatct)}
      </div>
      <Hooks />
      <Containment left={<FirstDiv />} right={<SecondDiv />} />
      <SignUpDialog />

      <div className="another">
        <h2>SCIENTIST</h2>
        {people.map(personDetail)}
      </div>
      <Accessibility />

      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
      <Example />
      <FetchData />
      <FirstName.Provider value={"Aditi"}>
        <LastName.Provider value={"Gupta"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
      <StopWatch />
      <Memo />
    </>
  );
}

export default App;
export { FirstName, LastName };
