import React from 'react'
import SubChildCounter from './SubChildCounter'

function ChildCounter(props) {
    console.log("ChildCounter", props)
  return (
    <>
     <button onClick={props.incBtn} > + </button>
     <SubChildCounter decBtn={props.decBtn}/>
    </>
  )
}

export default ChildCounter