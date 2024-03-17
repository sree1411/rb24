import { useState } from "react";



const CreatePost = ()=>{

    const [posts, setPosts]= useState([])
    const [records, setRecords]= useState({
        thought:"",
        url:""
    })

    function handleInput(e){
       setRecords({...records, [e.target.name]:e.target.value})
    }
  
    function addPost(e){
        e.preventDefault();
        setPosts([...posts, records])
    }

     
    return(
        <>
        <div>
            <textarea onChange={handleInput} name="thought"  value={records.thought}   cols="30" rows="10" placeholder="enter your thought"></textarea>
            <input type="url" onChange={handleInput} name="url"  value={records.url}     placeholder="enter the url"/>
             <button onClick={addPost}> add Your Post</button>
        </div>
         <>
          {
            posts.map((post)=>{
              return  <>
                    <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={post.url} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{post.thought}</h5>
                    </div>
                    </div>


                 </>
            })
          }
         </>
        </>
    )
}
export default CreatePost;