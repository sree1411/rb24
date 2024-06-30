import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../../src/components/counter/counterSlice'
import todoListReducer from '../components/todoList/todoListSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { countriesApi } from '../services/countriesApi'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todolist: todoListReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware),
})

setupListeners(store.dispatch)