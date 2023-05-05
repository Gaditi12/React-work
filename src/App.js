import React, { createContext } from "react";
//import Welcome from "./component/Welcome";
//import Button from "./component/Button";
//import Formatname from "./component/Embeddingexpressioninjsx";
//import Tick from "./component/Tick";
//import MyButton from "./component/Events";
//import Hooks from "./component/Hooks";
//import Containment from "./component/Containment";
// import FirstDiv from "./component/FirstDiv";
// import SecondDiv from "./component/SecondDiv";
//import ComA from "./component/ComA";
import Routers from "./Router";

//import StatusBar from "./component/StatusBar";

// const FirstName = createContext();
// const LastName = createContext();

function App() {
  return (
    <>
      <h1>Welcome to react</h1>
      {/* <Welcome name="Aditi" /> */}
      <Routers />
      {/* <Button />
      <MyButton /> */}
      {/* <Tick /> */}
      {/* <Hooks /> */}
      {/* <Containment left={<FirstDiv />} right={<SecondDiv />} /> */}

      {/* <FirstName.Provider value={"Aditi"}>
        <LastName.Provider value={"Gupta"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider> */}
      {/* <StatusBar /> */}
    </>
  );
}

export default App;
//export { FirstName, LastName };
