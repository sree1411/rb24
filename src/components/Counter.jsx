import React, { useState } from 'react'

function Counter(props) {
      console.log(props)
   const [count, setCount] = useState(props.initvalue)
 
    
   function incBtn(){
    setCount(count + 1)
   }

   function decBtn(){
    setCount(count - 1)
   }

  return (
     <>
        <h1> {props.person} count is  :{count}</h1>
        <button onClick={incBtn} > increment  </button>
        <button onClick={decBtn}> decrement  </button>

     </>
  )
}

export default Counter