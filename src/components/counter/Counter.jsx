import React from 'react'
import { decrement, increment, reset } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value);


  return (
      <>
      
          <h4> Counter App  :{count} </h4>
          <button onClick={()=>dispatch(increment())}> Increment </button>
          <button onClick={()=>dispatch(decrement())}> decrement </button>
          <button onClick={()=>dispatch(reset())}> reset </button>


      
      </>
  )
}

export default Counter