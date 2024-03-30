import { useState } from 'react';
import './App.css';

function App() {

  const [records, setRecords]= useState([])
  const [users, setUsers]= useState({
    firstname:"",
    lastname:"",
    dob:""
  })

  

  function handleInput(e){
    setUsers({...users, [e.target.name]:e.target.value})
  }
   
 function addUser(e){
   e.preventDefault()
   setRecords([...records, users])
   setUsers({
    firstname:"",
    lastname:"",
    dob:""
   })
 }
  return (
    <>
       <form>
         <input type="text" onChange={handleInput} name='firstname'  value={users.firstname} placeholder='enter the firstname'  /> 
         <input type="text" onChange={handleInput} name='lastname'  value={users.lastname}     placeholder='enter the lastaname'  /> 
         <input type="text" onChange={handleInput} name='dob'  value={users.dob}   placeholder='enter the dob'  /> 
          <button onClick={addUser} > Add user </button>
       </form>
       

            <table class="table">
            <thead>
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>

            {
              records.map((person)=>{
                return <tr>
                <td>{person.firstname}</td>
                <td>{person.lastname}</td>
                <td>{person.dob}</td>
              </tr>
              })
            }

              
            
              
            </tbody>
</table>



 


    </>
  );
}

export default App;
