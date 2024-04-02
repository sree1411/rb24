import React, { useContext } from 'react'
import UseContext from './UseContext'

function Third() {

    const {myname} = useContext(UseContext)

  return (
     <>
       <h1> Third component:{myname.map((people)=>{
         return <>
            <li>
                {people.name}
            </li>
             
         </>
     })}</h1>
     
     </>
  )
}

export default Third