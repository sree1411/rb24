import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../reducer/counterSlice'
import subscriberReducer from '../reducer/subscriberSlice'
import dislikeReducer from '../reducer/counterSlice2'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        dislike:dislikeReducer,
        subscriber: subscriberReducer
    }
})