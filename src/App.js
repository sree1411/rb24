import { useState } from 'react';
import './App.css';

function App() {

   const [students, setStudents] = useState(['sreekanth', 'viratkohli', 'dhoni']) 
  
   const[newstudent, setNewStudent] = useState('')

   function handleChange(e){
    setNewStudent(e.target.value)
   }

   function addStudent(){
    setStudents([...students, newstudent])
   }

    function deleteBtn(i){
      var temp = [...students]
      temp.splice(i,1)
      setStudents([...temp])
      alert(i)
    }

  return (
    <div className="App">

      <input type="text" onChange={handleChange} />
      <button onClick={addStudent}> Add Student </button>   

      {
        students.map((student, i)=>{
          return <>
               <li>
                  {student}
                  <button onClick={()=>{deleteBtn(i)}}>  Delete </button>
               </li>
          </>
        })
      }
    </div>
  );
}

export default App;
