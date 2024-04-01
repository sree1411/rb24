import { useState } from 'react'
function useCounter(init=0, steps = 2){
    const [count, setCount] = useState(init)
    const incbtn =()=>{
        setCount(count + steps)
     }   
    
     const decbtn =()=>{
        setCount(count - 1)
     } 
     return[count, incbtn, decbtn]
}
export default useCounter;


//starting values zero or either veredi undali ante  init ani mention
// chesi simple ga rasukovachu
// useCounter ane customer hook lone tisukovali pratidi max ,
// increase cheyali by two or 3 number we can use step method to increase the 