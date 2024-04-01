import React, { useEffect } from 'react'

function Task(props) {
    console.log("hi",props)
     useEffect(()=>{
          console.log('with dependency and empty array', props.student)
     }, [])

     useEffect(()=>{
        console.log('with dependency array', props.student)
      })


  return (
      <>
        <h1> {props.student}</h1>
        <button onClick={()=>{props.deletebtn(props.i)}}> delete</button>
      </>
  )
}

export default React.memo(Task)