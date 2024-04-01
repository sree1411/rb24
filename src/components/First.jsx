import React, { useContext } from 'react'
import Second from './Second'
import UserContext from './UserContext'

function First() {

const  {count}  = useContext(UserContext)
 console.log(count)


  return (
       <> 

        <h1> first component count :{count}</h1>
         <Second/>
       </>
  )
}

export default First