import React from 'react'

const Navbar = ({loginpageAction,  registerPageAction}) => {
  return (
     <>
    <div className="navbarsection">
           <div className="logo">
             Business Application
           </div>
            <div className="details">
                <span onClick={loginpageAction}> Login /</span>
                <span onClick={registerPageAction}> Register  </span>
            </div>
    </div>
     
     </>
  )
}

export default Navbar