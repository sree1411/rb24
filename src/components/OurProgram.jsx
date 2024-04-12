import React from 'react';
import Cardcomponent from './Cardcomponent';

const OurProgram = () => {
  return (
    <div id="program" className='program'> {/* Ensure id attribute is set */}
      <div className='ourprogramtext'>
        <span> OUR PROGRAM </span>
        <span> What We Offer</span>
      </div>
      <div className='ourprogram'>
        <Cardcomponent className="program"/>
        <Cardcomponent/>
        <Cardcomponent/>
      </div>
    </div>
  );
}

export default OurProgram;

