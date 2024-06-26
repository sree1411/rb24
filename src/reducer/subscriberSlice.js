import { createSlice } from "@reduxjs/toolkit";



export const subscriberSlice = createSlice({
    name:"subscriber",
    initialState:{
        users:[]
    },
    reducers:{
        addSubscriber:(state,action)=>{
            state.users.push(action.payload)
        }
    }
})

export const {addSubscriber} = subscriberSlice.actions;
export default subscriberSlice.reducer;