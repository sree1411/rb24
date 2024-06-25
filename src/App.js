import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      setSearchResults([...res.data]); // Initialize search results with all countries
    });
  }, []);


useEffect(()=>{

  if(searchTerm === ""){
    setSearchResults([...countries])
  }else{
    let result = countries.filter((f)=>{
      return ( ((f.capital && f.capital[0].toLowerCase().includes(searchTerm.toLowerCase())) ||
              ( f.region && f.region.toLowerCase().includes(searchTerm.toLowerCase())) ||
             ( f.continents && f.continents[0].toLowerCase().includes(searchTerm.toLowerCase())) ))

   })
   setSearchResults(result)
  }

   

   

}, [searchTerm, countries])



  function handleChange(e) {
    setSearchTerm(e.target.value.toLowerCase())
  }

  return (
    <div className="App">
     
     
     
      <input
        type="text"
        name=""
        id=""
        onChange={handleChange}
        placeholder="Enter the search keyword"
      />

      <table className="table">
        <thead>
          <tr>
            <th>s.no</th>
            <th>Region</th>
            <th>Capital</th>
            <th>Continents</th>
            <th>Population</th>
            <th> Currencies</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((country, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{country.region}</td>
              <td>{country.capital}</td>
              <td>{country.continents}</td>
              <td>{country.population}</td>
               <td>
               {
                 country.currencies ? (
                  Object.keys(country.currencies).map((currencyCode)=>
                    (
                      <li>
                     {country.currencies[currencyCode].name} ({country.currencies[currencyCode].symbol})
                      </li>
                    )
                  )
                 ):""
          }
               </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
