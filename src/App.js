import { useState } from 'react';
import './App.css';
import First from './components/First';
import UserContext from './components/UserContext';
import Dummydata from './components/Dummydata'

function App() {

  const [myname, setMyName] = useState([{
      name:"iphone",
      cost:12000
  },
    {
      name:"redme",
      cost:12000
    },


])


const [count, setCount] = useState(0)

  return (
     <>

       <UserContext.Provider value={{myname, count,  Dummydata}}>
               <First />
       </UserContext.Provider>
     
     </>
       
  );
}

export default App;

// usecontext hook lo two values of function lani pampali ante
// ela rayali value={{myname, count}}  and vatini use chesukovali ante
//ekada edi use avutado apudu {} object method lo rayali
//like  const { myname, count }= useContext(UserContext) ela rasukoni use chesukovali 

//dummydata lo objects lo tisukunam kabati dummydata.firstname rayali
//ade array of objects vaste map operater vadali