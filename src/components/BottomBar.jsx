import React from 'react'
import { useSelector } from 'react-redux'

const BottomBar = () => {


  const subs = useSelector((state)=>state.subscriber.users)
  const comts = useSelector((state)=>state.comment.comments)

 


  return (
     <>
       <h1> Bottom section</h1>
        <div>
            Subscribers :
            {
              subs.map((sub, index)=>(
                <ul key={index}>
                  <li>{sub}</li>
                </ul>
              ))
            }
        </div>
        <div>
            comments :
            {
              comts.map((comt, index)=>(
                <ul key={index}>
                  <li>{comt}</li>
                </ul>
              ))
            }
        </div>
      
     
     </>
  )
}

export default BottomBar