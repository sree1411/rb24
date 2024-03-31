import React from 'react'

function SubChildCounter(props) {
    console.log("SubChildCounter", props)
  return (
      <>
        <button onClick={props.decBtn} > - </button>
      </>
  )
}

export default SubChildCounter