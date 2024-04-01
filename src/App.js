import { useState } from 'react';
import './App.css';

function App() {
  
     const [like, setlike] = useState(0)
     const [dislike, setDislike] = useState(0)

     const likeBtn =()=>{
      setlike(like + 1)
     }

     const dislikeBtn =()=>{
       setDislike(dislike + 1)
     }



  return (
     <>
       <span> {like}</span>   
       <span> {dislike}</span>  <br/>
     <button onClick={likeBtn} > Like  </button>
     <button onClick={dislikeBtn} > DisLike </button>
     
     </>
  );
}

export default App;
