import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: ["sree", "virat", "dhoni"],
  }

export const todoListSlice = createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addTodo:(state, action)=>{
           state.todos.push(action.payload)
        },
        deleteTodo:(state, action)=>{
            state.todos.splice(action.payload, 1)
            console.log(state, "state")
            console.log(action.payload, "action")
        },
         
    }
})

export const {addTodo, deleteTodo} = todoListSlice.actions;

export default todoListSlice.reducer