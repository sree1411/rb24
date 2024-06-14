import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowContact = ({peoples}) => {

    console.log(peoples)



    
    

  return (
        <>
            <h1> People Information about the Data </h1>
          
          <div className="pp">
          {
            peoples.length>0 && peoples.map((people)=>{
                return <div className='peopleBox'>
                         
                          
                         <li> Name :{people.name}</li>
                         <li>  Age: {people.age}</li>
                         <li>  Gender: {people.gender}</li>
                         <li>  Blood Group: {people.blood}</li>
                         <li> Phone Number: {people.phone}</li>
                         </div>

                      
            })
          }
          </div>
        
        </>
  )
}

export default ShowContact