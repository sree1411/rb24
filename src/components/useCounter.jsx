import { useState } from 'react'
function useCounter(){
    const [count, setCount] = useState(0)
    const incbtn =()=>{
        setCount(count + 1)
     }   
    
     const decbtn =()=>{
        setCount(count - 1)
     } 
     return[count, incbtn, decbtn]
}
export default useCounter;