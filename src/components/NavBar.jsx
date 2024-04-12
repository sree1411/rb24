import React from 'react';
import { Link } from 'react-scroll';
import Cardcomponent from './Cardcomponent';

const NavBar = () => {
  return (
    <div className="navbarsection">
      <div className="logo">
        <span> Renati University </span>
      </div>
      <div className="menu">
        <ul>
          <li> <Link to='home' smooth={true} offset={0} duration={200}>Home </Link> </li>
          {/* Use the Link component from react-scroll */}
          <li><Link to='program' smooth={true} offset={0} duration={200}>Program</Link></li>
          <li> <Link to='aboutus' smooth={true} offset={0} duration={200}>About Us</Link></li>
        </ul>
      </div>
      <span className='contactus'>ContactUs</span>
    </div>
  );
}

export default NavBar;
