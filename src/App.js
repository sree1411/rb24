import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
 

   const[countries, setCountries] = useState([])
   const [newCountries, setNewCountries] = useState('')


    useEffect(()=>{
     axios.get("https://restcountries.com/v3.1/all").then((res)=>{
      setCountries(res.data)
     }).catch((error)=>console.log(error.message))
    },[])

 

 

  const handleSelectRegion =(e)=>{
    setNewCountries(e.target.value)
  }
 
  let  filteredCountries;
  if(newCountries){
    filteredCountries = countries.filter((country)=>country.region === newCountries)
  }else{
    filteredCountries = countries
  }

 

  const uniqueregions = (countries)=>{
    let findRegion = countries.map((country)=>country.region)
    let uniqueValue = Array.from(new Set(findRegion))
    let getRegion = uniqueValue.filter((region)=>region)
    return getRegion;
  }
 
 const sortRegion = uniqueregions(countries).sort()
 

  return (
     <>
     
      <select onChange={handleSelectRegion}>
        {
          sortRegion.map((region)=>{
            return <>
                   <option value={region}> {region} </option>
               </>
          })
        }
      </select>

   

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
      filteredCountries.map((country,i)=>{
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



