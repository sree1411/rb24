import React, { useContext } from 'react'
import Second from './Second'
import UserContext from './UserContext'


function First() {

const  {count, Dummydata}  = useContext(UserContext)
 console.log(Dummydata)


  return (
       <> 

        <h1> first component count :{count}</h1>
        <>
        {/* <h1> value is :{Dummydata.map((item)=>{
            return <>
                   <ul>
                      <p>{item.firstname}</p>
                   </ul>
                </>
        })} </h1> */}
       <h1> value is  {Dummydata.firstname}</h1>
       </>
         <Second/>
       </>
  )
}

export default First