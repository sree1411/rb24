import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

   const likes  = useSelector((state)=>state.counter.value)
   const dislikes  = useSelector((state)=>state.dislike.value)
   const subscribers  = useSelector((state)=>state.subscriber.users)



  return (
    <>
      <h1> Nav Bar Portion </h1>
      <div>
        <p> Subscribers : {subscribers.length} </p>
      </div>
      <div>
        <p> Comments : </p>
      </div>
      <div>
        <p>Likes : {likes} </p>
        <p>DisLikes:{dislikes } </p>

      </div>
    </>
  );
};

export default Navbar;
