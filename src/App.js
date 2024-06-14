import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

     const [books, setBooks] = useState([]) 
     const [newBook, setNewBook] = useState({title:"", author:""})
     const [updatedBook,setUpdateBook] = useState([])
     const [show, setShow] = useState(false)

     useEffect(()=>{
         getAllBooks();

     }, [])

   

      
     function getAllBooks(){
      axios.get("http://localhost:3000/posts").then((res)=>{
        setBooks([...res.data])
      })
     }


     function addBook(){
        axios.post("http://localhost:3000/posts",newBook).then((res)=>{
            getAllBooks();
            setNewBook({title:"", author:""})
        })
        
     }


    function deleteBook(id){
        axios.delete(`http://localhost:3000/posts/${id}`).then(()=>{
          getAllBooks();
        })
    }

     function editBook(book){
      setShow(true)
      setUpdateBook({...book})
     }
     function updateBook(){
      axios.put(`http://localhost:3000/posts/${updatedBook.id}`, updatedBook).then(()=>{
        getAllBooks();
        setShow(false)
      })
     }

  return (
    <div className="App">
        <h1> welcome to the page </h1>
      {
        !show && (<>
        <input type="text" placeholder='Enter the title' value={newBook.title} onChange={(event)=>{setNewBook({...newBook, title:event.target.value})}} />
        <input type="text" placeholder='Enter the author' value={newBook.author}  onChange={(event)=>{setNewBook({...newBook, author:event.target.value})}} />
        <button onClick={()=>{addBook()}}> Add Book </button>
        </>)
      }
      <h1> No.of Authors are : {books.length}</h1>
      {
        show && (
          <>
        <input type="text" placeholder='Enter the title' value={updatedBook.title} onChange={(event)=>{setUpdateBook({...updatedBook, title:event.target.value})}} />
        <input type="text" placeholder='Enter the author' value={updatedBook.author}  onChange={(event)=>{setUpdateBook({...updatedBook, author:event.target.value})}} />
        <button onClick={()=>{updateBook()}}> Update Book </button>
          </>
        )
      }
        

      


        {
          books.length>0 && books.map((book, id)=>{
             return <div key={id} className='booklist'>
               <li> Title:{book.title}</li>
               <li> Author:{book.author}</li>
                <div>
                <button onClick={()=>{deleteBook(book.id)}}> Delete </button>
                <button onClick={()=>{editBook(book)}}> Edit </button>
                </div>


                </div>
          })
        }
    </div>
  );
}

export default App;
