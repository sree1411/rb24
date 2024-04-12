import React, { useState } from "react";
import Navbar from "./maincomponents/Navbar";
import LoginPage1 from "./components/LoginPage1";
import LoginPage2 from "./components/LoginPage2";
import Login from "./formcomponents/Login";

const LandingPage = () => {
  
    const [loginpage, setLoginPage] = useState(false)
    const [registerpage, setRegisterPage] = useState(false)

    const [refreshpage, setRefreshpage] = useState(true)


     const refreshAction =()=>{
        setRefreshpage(false)
        setRegisterPage(true)
     }


    const loginpageAction =()=>{
      setLoginPage(true)
      setRegisterPage(false)
     
    }

    const registerPageAction =()=>{
      setRegisterPage(true)
      setLoginPage(false)
      setRefreshpage(false)
    }

  return (
    <>


      <Navbar loginpageAction ={loginpageAction}  registerPageAction={ registerPageAction}/>

      <div className="landingpage">
        <LoginPage1 loginpage={loginpage} registerpage={registerpage} refreshAction={refreshAction} refreshpage={refreshpage}/> 

        <LoginPage2 />
      </div>
    </>
  );
};

export default LandingPage;
