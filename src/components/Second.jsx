import React, { useContext } from 'react'
import UseContext from './UseContext'
import Third from './Third'

function Second() {

  const {myname} = useContext(UseContext)
  console.log("hi",myname)

  return (
    <>
     <h1> second component:{myname.map((people)=>{
         return <>
            <li>
                {people.name}
            </li>
             
         </>
     })}</h1>
     <Third/>
    </>
  )
}

export default Second