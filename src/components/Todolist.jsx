import { useCallback, useState } from 'react'
import Task from './Task'

function Todolist() {


   const [students, setStudents] = useState(['sreekanth', 'virat', 'dhoni'])
   
   const [newstudent, setNewStudent] = useState('')

   function handleChange(e){
        setNewStudent(e.target.value)
   }

  function addStudent(){
    setStudents([...students, newstudent])
  }



const deletebtn = useCallback((i) => {
    var temp =[...students]
    temp.splice(i,1)
    setStudents([...temp])
  }, [students]);

  
//   function deletebtn(i){
//      var temp =[...students]
//      temp.splice(i,1)
//      setStudents([...temp])
//   }
// usecall back store chesukoni mall malla re-render kakunda chusukuntadi 

  return (
     <>
      
      <input type="text" onChange={handleChange}  placeholder='enter the name ' />  <br/>
      <button  onClick={addStudent}   > Add Student </button>

      {
           students.map((student,i)=>{
              return <>
                       <Task student ={student} i={i} deletebtn ={deletebtn}/>
                     </>
          })
        }



     </>
  )
}

export default Todolist


//react.memo use chesinapudu function raste malla malla render avudi
// ala malla mall render kakunda undali ante aa function remove chesi chuste saripothadi
//function tho patu rayali ante usecallback rayali rayali
//ee code lo input filed lo em rasina rerender avuta undi ala apali ante usecallback rayli
//like below  ee code lo unde danini ,   function deletebtn(i){
//      var temp =[...students]
//      temp.splice(i,1)
//      setStudents([...temp])
//   } 

// evidanga rayali 
// //const deletebtn = useCallback((i) => {
//     var temp =[...students]
//     temp.splice(i,1)
//     setStudents([...temp])
//   }, [students]);


//The useCallback and useMemo Hooks are similar. The main 
//difference is that useMemo returns a memoized value and useCallback returns a memoized function.