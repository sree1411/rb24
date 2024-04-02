import React, { useContext } from 'react'
import Second from './Second'
import UseContext from './UseContext'

function First() {

  const {count, incBtn} = useContext(UseContext)

  return (
    <>
       <h1> first component :{count}</h1>
       <button onClick={incBtn}> + </button>
         
         <Second/>
    </>
  )
}

export default First