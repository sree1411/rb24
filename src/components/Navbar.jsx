import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {


     const likes = useSelector((state)=>state.counter.value)
     const subs =  useSelector((state)=>state.subscriber.users)
     const comments =  useSelector((state)=>state.comment.comments)



  return (
     <>
        <h1> NavBar section</h1>
        <div>
            Subscribers : {subs.length}
        </div>
        <div>
            comments : {comments.length}
        </div>
        <div>
            Likes : {likes}
        </div>
     
     
     </>
  )
}

export default Navbar