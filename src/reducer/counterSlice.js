import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name:"counter",
    initialState:{
      value:0
    },
    reducers:{
      increment:(state, action)=>{
          state.value= state.value + 1;
          console.log(state.value)
      },
      decrement:(state, action)=>{
        state.value= state.value - 1;
        console.log(state.value)
      },
      newvalue : (state, action)=>{
         state.value= state.value + action.payload
      }
    }
})

export const { increment, decrement, newvalue} = counterSlice.actions;

export default counterSlice.reducer