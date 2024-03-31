import { useState } from 'react';
import './App.css';

function App() {

  const[students, setStudents]= useState([
      {
        name:"sree",
        age:22,
        gender: "male"
      },
      {
        name:"kanth",
        age:24,
        gender: "female"
      },
      {
        name:"renati",
        age:23,
        gender: "male"
      },
      {
        name:"kohli",
        age:21,
        gender: "female"
      },
      {
        name:"sree",
        age:25,
        gender: "male"
      },
      

  ])

  
const [studentname, setStudentName]= useState({
    name:"",
    age:"",
    gender:""
})



  function handleChange(e){
        setStudentName({...studentname, [e.target.name]:e.target.value})
  }

  function addpeople(){
    setStudents([...students, studentname])
    setStudentName(
      {
        name:"",
        age:"",
        gender:""
    })
  }

  function deleteBtn(i){
    var temp =[...students]
    temp.splice(i, 1)
    setStudents([...temp])
  }

  const sortByName =()=>{
      
      students.sort((a,b)=>{
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return +1;
        }
      })
      setStudents([...students])
  }


  return (
    <>


    <div className='d-flex'>
     <input type="text" onChange={handleChange}  name='name' value={studentname.name}       placeholder='enter the name' />  <br/>
      <input type="text" onChange={handleChange}  name='age' value={studentname.age}        placeholder='enter the age' /> <br/>
      <input type="text" onChange={handleChange}  name='gender'value={studentname.gender}       placeholder='enter the gender' /> <br/>
      <button onClick={addpeople}> Add Details</button>
    </div>

       <button onClick={sortByName}> Sort By name </button>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">gender</th> 
      <th scope="col">action</th> 

    </tr> 
  </thead>
  <tbody>
    
    {
      students.map((student, i)=>{
        return <> 
        <tr> 
          <th scope="row">{i+1}</th> 
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>
            
            {student.gender === "male" ?(
               <p>&#129333;</p>
            ):(<p>&#128105;</p>)}
          
          </td>
          <td>
            <button onClick={()=>{deleteBtn(i)}} > Delete </button>
          </td>
        </tr>
        
        </>
            
      })
    }
    
   
     
  </tbody>
</table>
    </>
  );
}

export default App;

{/* <h1>
 below is the one simple example of the condtion rendering
import { useState } from 'react';
 <h1>number is :{number} and it is</h1>
      <h1> {number%2 === 0 ? "even":"odd"}</h1>

</h1> */}