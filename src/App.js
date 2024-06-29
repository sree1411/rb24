import { useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  function updateValues(action) {
    if (action === "increment") {
      setCount(count + 1);
    }
    if (action === "decrement") {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  }

  return (
    <div className="App">
      <ChildComponent count={count} updateValues={updateValues} />
    </div>
  );
}

export default App;
