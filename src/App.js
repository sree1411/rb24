import './App.css';
import Counter from './component/Counter';
import { useState } from 'react';

function App() {

  const[count , setCount] = useState(0)

  function incBtn(){
    setCount(count + 1 )
  }

  function decBtn(){
    setCount(count - 1 )
  }
  

  return (
    <div className="App">

         <h1> parent count   :{count}</h1>
        <Counter incBtn={incBtn} decBtn ={decBtn} />
    </div>
  );
}

export default App;
