import React, { useEffect, useRef } from 'react'

function Registration() {
     
     const ref1 = useRef()
     const ref2 = useRef()
     const ref3 = useRef()

     useEffect(()=>{
        ref1.current.focus()
     })

    const checkEntry =(e)=>{
        console.log(e)
      if(e.key === "Enter"){
        ref2.current.focus()
      }
    }

    const checkEntry1 =(e)=>{
        console.log(e)
      if(e.key === "Enter"){
        ref3.current.focus()
      }
    }
  

  return (
     <>
       <label>First Name </label>
       <input type="text"   id="d1" ref={ref1} onKeyUp={checkEntry} />

       <label>Last Name </label>
       <input type="text"   id="d2" ref={ref2} onKeyUp={checkEntry1}/>
       <button  ref={ref3}> submit</button>
     
     </>
  )
}

export default Registration 


// we can write the focus thing by uncontrolled components
// byusin the dom manipulation but it works late , so that we use the useRef method
