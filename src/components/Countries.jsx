import React, { useEffect, useState } from 'react'

function Countries() {
  

     const [countries, setCountries] = useState([])
     const [newcountries, setNewCountries] = useState('')
       useEffect(()=>{
        async function logMovies() {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries([...data])
          }
          logMovies()
    
       }, [])
       const [records, setRecords]= useState([])

 const sortByName1 =()=>{
    countries.sort((a, b)=>{
        const nameA = a.capital
        console.log(nameA)
        const nameB = b.capital 
        if (nameA < nameB) {
            return -1;
          }
    })
    setCountries([...countries])
 }

 const sortByName2 =()=>{
    countries.sort((a, b)=>{
        const nameA = a.capital
        console.log(nameA)
        const nameB = b.capital 
        if (nameA > nameB) {
            return -1;
          }
    })
    setCountries([...countries])
 }

 const sortByPopulation1 =()=>{
    countries.sort((a, b)=>{
        const nameA = a.population
        console.log(nameA)
        const nameB = b.population
        if (nameA < nameB) {
            return -1;
          }
        return 0;
    })
    setCountries([...countries])
 }
    
 const sortByPopulation2 =()=>{
    countries.sort((a, b)=>{
        const nameA = a.population
        console.log(nameA)
        const nameB = b.population
        if (nameA > nameB) {
            return -1;
          }
        return 0;
    })
    setCountries([...countries])
 }

 
 function handleSelect(e){
  setNewCountries(e.target.value)
 }

// //  let filteredCountries;
// if (newcountries) {
//     filteredCountries = countries.filter(country => country.region === newcountries);
// } else {
//     filteredCountries = countries;
// }



   
 const filteredCountries = newcountries
 ? countries.filter(country => country.region === newcountries)
 : countries;


 const getUniqueRegions = (countries) => {
    const regions = countries.map((country) => country.region);
     
    const uniqueRegions = Array.from(new Set(regions));
 
    return uniqueRegions.filter((region) => region); // Step 2: Filter out falsy values
  };

  const sortedUniqueRegions = getUniqueRegions(countries).sort()
  console.log("sorted",sortedUniqueRegions)

 const Filter =(e)=>{
    setRecords(countries.filter(f => (f.region.toLowerCase().includes(e.target.value))))
    console.log("sree",setRecords)
     
 }

  return (
     <>
      

     <button onClick={sortByName1}> Sort By name A-Z </button> <br/>
     <button onClick={sortByName2}> Sort By name Z-A </button> <br/>
     <button onClick={sortByPopulation1}> Low Population</button> <br/>
     <button onClick={sortByPopulation2}> High Population</button> <br/>
     <select onChange={handleSelect} value={newcountries}>
        <option value="">Select Region</option>
        {
            sortedUniqueRegions.map((region)=>(
                <option key={region} value={region}>{region}</option>
            ))
         }
      </select>
    
     
     




     <table className="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">capital</th>
        <th scope="col">Population</th>
        <th scope="col">region</th>
        </tr>
    </thead>
  <tbody>
    {
       filteredCountries.map((country, i)=>{
            return <>
               <tr>
                 <th scope="row">{i+1}</th>
                <td>{country.capital}</td>
                <td>{country.population}</td>
                <td>{country.region}</td>
            
                </tr>
            </>
        })
    }
  
  
  
  </tbody>
</table>

<input type="text"  onChange={Filter}  placeholder='enter the search keyword' /> <br/>
<table className="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">capital</th>
        <th scope="col">Population</th>
        <th scope="col">region</th>
        </tr>
    </thead>
  <tbody>
    {
       records.map((country, i)=>{
            return <>
               <tr>
                 <th scope="row">{i+1}</th>
                <td>{country.capital}</td>
                <td>{country.population}</td>
                <td>{country.region}</td>
            
                </tr>
            </>
        })
    }
  
  
  
  </tbody>
</table>

     </>
  )
}

export default Countries