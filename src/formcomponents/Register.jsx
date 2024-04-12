import React from 'react'

const Register = () => {
  return (
    <>
  <div className="loginform">
     <span className='rg'> Registration Form </span>
  <form className='formcss'>
    <div class="form-group">
      <label className='ss' for="username">User Name</label>
      <input type="text" id="username" placeholder='Enter your name' />
    </div>
    <div class="form-group">
      <label className='ss' for="email">Email</label>
      <input type="text" id="email" placeholder='Enter your email' />
    </div>
    <div class="form-group">
      <label className='ss' for="password">Password</label>
      <input type="text" id="password" placeholder='Enter your password' />
    </div>
    <div class="form-groups"> 
         <button>Submit</button>
    </div>
  </form>
</div>
    
    </>
  )
}

export default Register