import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    

    const [books, setBooks]= useState([])
    const [show, setShow]= useState(false)
    const [updateBook, setUpdateBook]= useState(null)
    const [newbook, setNewBook]= useState({
        title:"",
        author:""
    })


    useEffect(()=>{
      bookData()
      
    }, [])
   
   function handlechange(e){
         setNewBook({...newbook, [e.target.name]:e.target.value})
   }

   function handlechange1(e){
    setUpdateBook({...updateBook, [e.target.name]:e.target.value})
}
   
   function addBook(){
    axios.post("http://localhost:8000/posts", newbook).then(()=>{
      bookData()
    })
    setNewBook({
      title:"",
      author:""
    })
   }

   function bookData(){
    axios.get("http://localhost:8000/posts").then((res)=>{
            setBooks([...res.data])
         })
   }

     function deleteBook(id){
       axios.delete(`http://localhost:8000/posts/${id}`).then(()=>{
        bookData()
       })
     }

    function editBook(book){
      setUpdateBook({...book})
        setShow(true)
    }

    function updateddBook(){
      axios.put(`http://localhost:8000/posts/${updateBook.id}`, updateBook).then(()=>{
        bookData()
      })
      setUpdateBook({
        title:"",
        author:""
      })
    }


  return (
     <>
     {
      !show &&  <div>
      <input type="text" placeholder='enter title of the book'  onChange={handlechange} name='title' value={newbook.title} />
      <input type="text" placeholder='enter title of the author'  onChange={handlechange} name='author' value={newbook.author} />
      <button onClick={()=>{addBook()}}> Add Book</button>
 </div>
     }
      {
        show && <div>
        <input type="text" placeholder='enter title of the book'  onChange={handlechange1} name='title' value={updateBook.title} />
        <input type="text" placeholder='enter title of the author'  onChange={handlechange1} name='author' value={updateBook.author} />
        <button onClick={()=>{updateddBook()}}> update Book</button>
   </div>
      }
       
      

     <div className='border border-1'>
     {
        books.map((book)=>{
          return <li>
                  <h1>Book Title : {book.title}</h1>
                  <h1>Book Author : {book.author}</h1>
                  <button onClick={()=>{deleteBook(book.id)}}> delete </button>
                  <button onClick={()=>{editBook(book)}}> Edit book </button>
                 </li>
        })
      }
     </div>
     </>
  );
}

export default App;
