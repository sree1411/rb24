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
     <>
     
       <div className='button-section'>
          <button onClick={regionBtnAtoZ}> Sort by Region A-Z </button>
          <button onClick={regionBtnZtoA}> Sort by Region Z-A </button>
          <button onClick={poputionBtnLow}> Sort by Population Low - High </button>
          <button onClick={poputionBtnHigh} > Sort by Population High - Low </button>
       </div>


     <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Region</th>
      <th scope="col">Capital</th>
      <th scope="col">Continents</th>
      <th scope="col">Poluation</th>
    </tr>
  </thead>
  <tbody>
    {
      countries.map((country,i)=>{
        return <>
          <tr>
            <th scope="row">{i+1}</th>
            <td>{country.region}</td>
            <td>{country.capital}</td>
            <td>{country.continents}</td>
            <td>{country.population}</td>
       
          </tr>
        </>
      })
    }
  
   
  </tbody>
</table>
     
     </>
  );
}

export default App;



