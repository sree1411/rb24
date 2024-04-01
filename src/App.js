import { useFormik } from 'formik';
import './App.css';
import { useState } from 'react';

function App() {

  const [students, setStudents] = useState([{
    firstName:"sree",
    lastName:"kanth"
  }])



    const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: ''
      },
      onSubmit: values => {
        setStudents([...students, values]);
        formik.resetForm()
      },
    });
 
 


  return (
     <>
     <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName"> First Name </label>
        <input type="text" name="firstName" id="firstName" onChange={formik.handleChange}
         value={formik.values.firstName} />  <br/>
        <label htmlFor="lastName"> Last Name </label>
        <input type="text" name="lastName" id="lastName" onChange={formik.handleChange}
         value={formik.values.lastName}/> <br/>
        <button type="submit"> Sign Up </button>
     </form>

     <table  className="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>

    </tr>
  </thead>
  <tbody>
    {
      students.map((student)=>{
        return <>
        <tr>
          <td>{student.firstName}</td>
          <td>{student.lastName}</td>
       
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
