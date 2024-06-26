import React, { useState } from 'react'
import UserForm from './UserForm';
import CommentForm from './CommentForm';
import { useDispatch } from 'react-redux';
import { increment } from '../reducer/counterSlice';

const CentralComponent = () => {

  const[show, setShow] = useState(false)
  const[show1, setShow1] = useState(false)

  const dispatch = useDispatch()
 
  function showSubscriber(){
    setShow(true);
  }

  function showComments(){
    setShow1(true);
  }

  return (
     <>
      
       <img src="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" alt=""  width={"50px"}/> <br></br>
       
         <button onClick={showSubscriber} > subscribe </button>  <br></br>
         <button onClick={showComments} > comment </button> <br></br>
         <button onClick={()=>{dispatch(increment())}} > Like </button> <br></br>

       {
        show &&  ( <UserForm/>)
       }
         {
        show1 &&  ( <CommentForm/>)
       }
     </>
  )
}

export default CentralComponent