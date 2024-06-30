import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './todoListSlice';

const TodoList = () => {


  const names = useSelector((state)=>state.todolist.todos);
  const dispatch = useDispatch()


 


  return (
       <>
         
         <h4> Todo List App </h4>

         {
            names.length >0 && names.map((name,i)=>(
                <> 
                  <li key={i}>
                    {name}
                     <button onClick={()=> dispatch(deleteTodo(i))}>delete</button>
                  </li>
                </>
            ))
         }
       
       </>
  )
}

export default TodoList