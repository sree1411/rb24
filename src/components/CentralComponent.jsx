import React, { useState } from 'react'
import SubscriberForm from './SubscriberForm'
import CommentForm from './CommentForm'
import { increment } from '../reducer/counterSlice'
import { dislike } from '../reducer/counterSlice2'
import { useDispatch} from 'react-redux'

const CentralComponent = () => {

    const dispatch = useDispatch()

const [showsub, setShowSub] = useState(false)
const [showcomment, setShowComment] = useState(false)




 function showSubscriber(){
    setShowSub(true)
 }

 function showComment(){
    setShowComment(true)
 }


  return (
      <>
      
        
        <img src="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600" alt="" width={'50px'} />  <br/> <br/>
        <button onClick={showSubscriber}> subscriber </button>    &nbsp;
        <button onClick={showComment}> comment </button>  <br/> <br/>  &nbsp;
        <button onClick={() => dispatch(increment())}> Likes :</button>  <br/> <br/>   &nbsp;    
        <button onClick={()=> dispatch(dislike())}> DisLikes </button>   <br/> <br/>
   

{
    showsub && <SubscriberForm/> 
} <br/> <br/>
{
    showcomment && <CommentForm/>
}
      </>
  )
}

export default CentralComponent