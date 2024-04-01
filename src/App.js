import { useState } from "react";
import "./App.css";
import First from "./components/First";
import UsersContext from "./components/UsersContext";

function App() {
  const [myname, setMyName] = useState("sreekanth");

  return (
    <>
      <UsersContext.Provider value={myname}>
        <First />
      </UsersContext.Provider>
    </>
  );
}

export default App;

//if you want to pass the data to diff diff components
//without using the  props or best alternative method to pass the data without props
//in this example parent to child or subchild lo data ni pass cheyadaniki previous
//props use chesta unam epudu better alternative way lo useContext hook lo rastam
