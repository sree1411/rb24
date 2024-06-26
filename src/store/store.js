import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../reducer/counterSlice'
import subscriberReducer from '../reducer/subscriberSlice'
import  commentReducer from '../reducer/commentSlice'
 
export const store = configureStore({
    reducer:{
      counter : counterReducer,
      subscriber: subscriberReducer,
      comment:commentReducer
    }
})