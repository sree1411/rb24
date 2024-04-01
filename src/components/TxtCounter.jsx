import React from 'react'
import useCounter from './useCounter'

function TxtCounter() {
    const [count, incbtn, decbtn] = useCounter(10)
  return (
      <>
      <h1> count :{count} </h1>
     <button onClick={incbtn} > increment </button>
     <button onClick={decbtn} > decrement </button>
      
      </>
  )
}

export default TxtCounter