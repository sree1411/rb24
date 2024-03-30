import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  
  // function reset() {
  //   setCount(0); this is normal function below one is the arrow function
  // }
  const reset = ()=>{
    setCount(0);
  }

  return (
    <>
      <h1> {count} </h1>
      <button onClick={increment}> + </button>
      <button onClick={()=>{setCount(count - 1)}}> - </button>
      <button onClick={reset}> Reset </button>
    </>
  );
}
export default App;

// dintlo two types of function rasanu