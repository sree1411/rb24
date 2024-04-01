import React from 'react'

function Task(props) {
    console.log("hi",props)
  return (
      <>
        {
          props.students.map((student,i)=>{
              return <>
                      <li>
                         {student}
                         <button onClick={()=>{props.deletebtn(i)}} > delete </button>
                      </li>
                     </>
          })
        }
      </>
  )
}

export default Task