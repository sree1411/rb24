import React, { useState } from 'react'

const Data = ({item}) => {

  const [show, setShow] = useState(false)
  
  const handleFunction = ()=>{
    setShow(!show)
  }


  return (
     <>
     <div className='datasection'>
         <div className="questionpart"onClick={handleFunction} >
               <h6>{item.question}</h6>
               
               <div>{!show ?<p> + </p> : <p> - </p>}</div>
               
      
         </div>

         <div className="answerpart">
           {show && <h6> {item.answer}</h6> }
         
         </div>
     </div>
     
  
    
     </>
  )
}

export default Data