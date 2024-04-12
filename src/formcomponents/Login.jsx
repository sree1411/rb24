import React from "react";

const Login = () => {
  return (
    <>
      <div className="loginform">
        <span className="rg"> Login Form </span>
        <form className="formcss">
          <div class="form-group">
            <label className="ss" for="email">
              Email
            </label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label className="ss" for="password">
              Password
            </label>
            <input
              type="text"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div class="form-groups">
            <button>Submit</button>
          </div>
        </form>
        <span> Dont have account, Please Register</span>
      </div>
    </>
  );
};

export default Login;
