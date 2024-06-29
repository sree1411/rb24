import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, newvalue} from "./reducer/counterSlice";
import { useState } from "react";






function App() {


  const [count, setCount]  = useState(2)
 
const number = useSelector((state)=>state.counter.value)

 const dispatch = useDispatch()


 

  return (
    <>
    
    <button onClick={()=>dispatch(increment())} >  + </button> :{number}        <button onClick={()=>dispatch(decrement())} >  - </button>   <br/>
    
     
      <input type="text" name="count" value={count}  onChange={(e)=>setCount(e.target.value)} />
      <button onClick={()=>dispatch(newvalue(Number(count) || 0))} >Add Amount </button>
      <button>Add Sync </button>
    
    
   

    
    </>
  );
}
export default App;

