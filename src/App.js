import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/counter/Counter";
import Countries from "./components/country/Countries";
import TodoList from "./components/todoList/TodoList";
import Navbar from "./components/navbar/Navbar";

function App() {
   return(
    <>


      <Navbar/>

      <Routes>
         <Route path="/counter" element={<Counter/>}/>
         <Route path="/todolist" element={<TodoList/>}/>
         <Route path="/countries" element={<Countries/>}/>
      </Routes>
    
      
     
    
    </>
   )
}

export default App;
