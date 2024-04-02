 
import { useState } from 'react';
import './App.css';
import First from './components/First';
import UseContext from './components/UseContext';

function App() {

   const [myname, setMyname] = useState([
         {
         name:"sree",
         age:22,
         num:1234
         },
         {
            name:"virat",
            age:22,
            num:1234
         },
      {
         name:"dhoni",
         age:22,
         num:1234
      },
   
   
   
   ])

 const [count, setCount] = useState(0)

  const incBtn =()=>{
   setCount(count + 1)
  }


  return (
     <>
        <UseContext.Provider value={{myname, count, incBtn}}>
             <First />
        </UseContext.Provider>
        
     </>
  );
}

export default App;
