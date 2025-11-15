import React from 'react'
import useCounter from './useCounter'
const BtnCounter = () => {

    const [count, incbtn, decbtn] = useCounter()

  return (
     <>
     <h1> count :{count} </h1>
     <button onClick={incbtn} > increment </button>
     <button onClick={decbtn} > decrement </button>
     </>
  )
}

export default BtnCounter