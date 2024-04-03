import { useEffect, useState } from "react";

function Countries() {
  const [Countries, setCountries] = useState([]);
  const [records, setRecords] = useState([])

  useEffect(() => {
    async function logMovies() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries([...data]);
      setRecords([...data])
    }
    logMovies();
    
  },[]);

 




  
  const handleChange =(e)=>{
        setRecords(Countries.filter((country)=>country.region.toLowerCase().includes(e.target.value)))
       
  }


  return (
    <>

      <input type="text"  onChange={handleChange} placeholder="enter the region " />    

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Region</th>
            <th scope="col">sub_region</th>
            <th scope="col">Population</th>
          </tr>
        </thead>
        <tbody>
          {records.map((country, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{country.region} </td>
                <td>{country.subregion}</td>
                <td>{country.population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Countries;
