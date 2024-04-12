import React, { useState } from 'react'
import Login from '../formcomponents/Login'
import Register from '../formcomponents/Register'

const LoginPage1 = ({loginpage,registerpage, refreshpage}) => {

  

  return (
     <>
     
      <div className="loginpage1">
           <div className='renati'>
             <h2> Renati Business</h2>
           </div>

           <div className='loginaccount'>
             <h4> Log in to your account </h4>
             <h4>Don't have an account? <span>Sign Up/ Register </span></h4>
        </div>
      
         {refreshpage && <Login/>}
         {loginpage && !refreshpage && <Login/>} 

         {registerpage && <Register/>}
     
           
      </div>

      
     
     </>
  )
}

export default LoginPage1