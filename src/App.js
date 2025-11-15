import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

//here we created the sort method by using the button 
// when we click the button it will work according to the function 

   const[countries, setCountries] = useState([])


    useEffect(()=>{
     axios.get("https://restcountries.com/v3.1/all").then((res)=>{
      setCountries(res.data)
     }).catch((error)=>console.log(error.message))
    },[])


   const regionBtnAtoZ = ()=>{
     countries.sort((a,b)=>{
      
      const nameA = a.region.toLowerCase()
      const nameB = b.region.toLowerCase()

      if(nameA > nameB){
        return +1
      } else {
        return -1
      }
     })
     setCountries([...countries])
   }

   const regionBtnZtoA = ()=>{
    countries.sort((a,b)=>{
     
     const nameA = a.region.toLowerCase()
     const nameB = b.region.toLowerCase()

     if(nameA > nameB){
       return -1
     } else {
       return +1
     }
    })
    setCountries([...countries])
  }


const poputionBtnLow =()=>{
  countries.sort((a,b)=>{
      
    const nameA = a.population 
    const nameB = b.population 

    if(nameA > nameB){
      return +1
    } else {
      return -1
    }
   })
   setCountries([...countries])
}

const poputionBtnHigh =()=>{
  countries.sort((a,b)=>{
      
    const nameA = a.population 
    const nameB = b.population 

    if(nameA > nameB){
      return -1
    } else {
      return 1
    }
   })
   setCountries([...countries])
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



