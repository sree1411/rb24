import { createSlice } from "@reduxjs/toolkit";



export const counterSlice2 = createSlice({
    name:"dislike",
    initialState:{
        value:0
    },
    reducers:{
        dislike:(state)=>{
            state.value += 1
        }
    }
})

export const {dislike} = counterSlice2.actions

export default counterSlice2.reducer