import React, { useState } from 'react'
import ChildCounter from './ChildCounter'

function Counter() {
    const[count,setCount]= useState(0)

     const incBtn =()=>{
        setCount(count + 1)
     }

     const decBtn =()=>{
        setCount(count - 1)
     }

  return (
      <>
        
        <h1> count :{count}</h1>
        <ChildCounter incBtn={incBtn} decBtn={decBtn} />
         
      </>
  )
}

export default Counter