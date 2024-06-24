import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  

  useEffect(() => {
    axios.get("https:restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  

  function sortByRegionAz() {
    let data = [...countries];
    let sortedvalue = data.sort((a, b) => {
      let a1 = a.region.toLowerCase();
      let b1 = b.region.toLowerCase();

      if (a1 > b1) {
        return 1;
      } else {
        return -1;
      }
    });
    setCountries(sortedvalue);
  }

  function sortByRegionZa() {
    let data = [...countries];
    let sortedvalue = data.sort((a, b) =>
      b.region.toLowerCase().localeCompare(a.region.toLowerCase())
    );
    setCountries(sortedvalue);
  }

  function sortByCapitalAz() {
    let data = [...countries];
    let result = data.sort((a, b) => {
      let a1 = a.capital ? a.capital[0].toLowerCase():""
      
      let b1 = b.capital ? b.capital[0].toLowerCase():""

      if (a1 > b1) {
        return 1;
      } else {
        return -1;
      }
    });
    setCountries(result);
  }

  function sortByCapitalZa() {
    let data = [...countries];
    let result = data.sort((a, b) => {
    
      let a1 = a.capital ? a.capital[0].toLowerCase():""
      
      let b1 = b.capital ? b.capital[0].toLowerCase():""

      if (a1 > b1) {
        return -1;
      } else {
        return 1;
      }
    });
    setCountries(result);
  }

  function sortByPopulation1(){
    let data = [...countries]
    let result = data.sort((a,b)=>a.population - b.population)
    setCountries(result)
  }

  function sortByPopulation2(){
    let data = [...countries]
    let result = data.sort((a,b)=>b.population - a.population)
    setCountries(result)
  }


   function sortBycontinent1(){
    let data = [...countries]
    let result = data.sort((a,b)=>{
      let a1 = a.continents ? a.continents[0].toLowerCase() :""
      let b1 = b.continents ? b.continents[0].toLowerCase() :""

       return a1.localeCompare(b1)

    })
    setCountries(result)
   }

   function sortBycontinent2(){
    let data = [...countries]
    let result = data.sort((a,b)=>{
      let a1 = a.continents ? a.continents[0].toLowerCase() :""
      let b1 = b.continents ? b.continents[0].toLowerCase() :""

       return b1.localeCompare(a1)

    })
    setCountries(result)
   }


 


  return (
    <div className="App">

    
<button className="btn btn-success" onClick={sortBycontinent1} > continent a-z</button>   
<button className="btn btn-danger"onClick={sortBycontinent2} > continent z-a</button>   

     <button className="btn btn-success" onClick={sortByPopulation1} > population Low-High</button>   
     <button className="btn btn-danger"onClick={sortByPopulation2} > population High-Low</button>   



      <button onClick={sortByRegionAz} className="btn btn-success">
        Sort By Region A- Z
      </button>{" "}
      
      <button onClick={sortByRegionZa} className="btn btn-danger">
        Sort By Region Z-A
      </button>{" "}
      
      
      <button onClick={sortByCapitalAz} className="btn btn-success">
        Sort By Capital A- Z
      </button>{" "}
      
      <button onClick={sortByCapitalZa} className="btn btn-danger">
        Sort By Capital Z-A
      </button>


  

      <table className="table">
        <thead>
          <tr>
            <th>s.no</th>
            <th>Region</th>
            <th>Capital</th>
            <th>Continents</th>
            <th>population</th>
          </tr>
        </thead>
        <tbody>
          {countries.length > 0 &&
            countries.map((country, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{country.region}</td>
                <td>{country.capital}</td>
                <td>{country.continents}</td>
                <td>{country.population}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
