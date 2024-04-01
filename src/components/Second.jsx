import React, { useContext } from 'react'
import UserContext from './UserContext'

function Second() {

 const { myname, count }= useContext(UserContext)
  console.log(myname)


  return (
       <>
        <h1> value is :{myname.map((item)=>{
            return <>
                   <ul>
                      <p>{item.name}</p>
                      <p>{item.cost}</p>
                   </ul>
                </>
        })} </h1>
         <h1> second component </h1>
       
       </>
    
  )
}

export default Second