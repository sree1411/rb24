import React from 'react'
import { useSelector } from 'react-redux'

const BottomBar = () => {

   const subscribers = useSelector((state)=>state.subscriber.users)
   console.log(subscribers)

  return (
     <>
     
     <div>
        <p> Subscribers : { subscribers.map((ele)=>(
           <li>
              {ele}
           </li>
        ))} </p>
      </div>
      <div>
        <p> Comments : </p>
      </div>
     
     </>
  )

}

export default BottomBar