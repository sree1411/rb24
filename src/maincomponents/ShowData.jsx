import React, { useState } from 'react'

const ShowData = ({item}) => {
  
    const[show, setShow] = useState(false)

    const handleFunction =()=>{
        setShow(!show);
    }

  return (
       <>
      
           <div className='accordion-section1'>
           <div className='question' onClick={handleFunction} >
              <h4>{item.question}</h4>
              <h1 className='iconpart'>{show ? '-' : '+'}</h1>
            </div>
             
            <div className='answer'>
                {
                  show  &&  <h5>{item.answer}</h5>
                }
            
            </div>
           </div>
         
    
       
       
       </>
  )
}

export default ShowData