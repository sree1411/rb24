import React, {  useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import ShowContact from './ShowContact';
import axios from 'axios';

const ContactInformation = () => {

  const [details, setdetails] = useState({
    name:"",
    age:"",
    phone:"",
    gender:"",
    blood:""
  })
  const [peoples, setPeoples] = useState([])

   useEffect(()=>{
    getAllDetails();
   }, [])
 



  const getAllDetails = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPeoples([...res.data]);
    });
  }


   function sendDetais(){
    axios.post("http://localhost:3000/posts",details).then((res)=>{
     setdetails({ name:"",age:"",phone:"", gender:"",blood:""})
      getAllDetails();
    })}


  function perosonDetails(e){
      e.preventDefault()
      sendDetais()
  }


  return (
    <>
       <Navbar/>
      
        <div className="contact-container">
        <form onSubmit={perosonDetails}>
            <input type="name" name="name" value={details.name}   onChange={(e)=>{setdetails({...details, name:e.target.value})}}  placeholder='enter the name'/> <br/>
            <input type="age" name="age"  value={details.age}        onChange={(e)=>{setdetails({...details, age:e.target.value})}} placeholder='enter the age'/> <br/>
            <input type="text" name="phone" value={details.phone}      onChange={(e)=>{setdetails({...details, phone:e.target.value})}}  placeholder='enter the phoneNumber'/> <br/>
            <input type="radio" name='gender'  checked={details.gender ==="male"}   value="male" onChange={(e)=>{setdetails({...details, gender:e.target.value})}}   /> Male
            <input type="radio" name='gender'  checked={details.gender ==="female"}  value="female" onChange={(e)=>{setdetails({...details, gender:e.target.value})}}  /> female
            <input type="radio" name='gender'  checked={details.gender ==="other"}  value="other" onChange={(e)=>{setdetails({...details, gender:e.target.value})}} /> Other <br/>
             <select name="blood" value={details.blood} onChange={(e)=>{setdetails({...details, blood:e.target.value})}}> 
               <option value=""> select Blood group</option>
               <option value="a"> A</option>
               <option value="b"> B</option>
               <option value="c"> C</option>
               <option value="d"> D</option> 

             </select> <br/>
        <button type='submit'> submit </button>
        </form>
        </div>

       <ShowContact peoples={peoples}/>
    </>
  )
}

export default ContactInformation