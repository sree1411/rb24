import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  //basic axios and fetchMethod
  // useEffect(()=>{
  //     axios.get("https://restcountries.com/v3.1/all").then((res)=>{
  //              setCountries(res.data)
  //     })
  // }, [])

  // useEffect(()=>{
  //       fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then(data =>{
  //         setCountries(data)
  //       })

  //   }, [])

  // writing try catch along with the async and await

  // useEffect(() => {
  //   let fetchData = async () => {
  //     try {
  //       let response = await fetch("https://restcountries.com/v3.1/all");
  //       if (!response.ok) {
  //         throw new Error("invalid");
  //       }
  //       let data = await response.json();
  //       setCountries(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   let fetchData = async () => {
  //     try {
  //       let response = await axios.get("https://restcountries.com/v3.1/all");
  //       if (response.status !==200) {
  //         throw new Error("invalid");
  //       }
  //       const data = await response.data;
  //       setCountries(data);
      
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
// function lowPopBtn(){
//   let data = [...countries]
//   let result = data.sort((a,b)=>a.population - b.population);
//   setCountries(result)
// }
// function highPopBtn(){
//   let data = [...countries]
//   let result = data.sort((a,b)=>b.population - a.population);
//   setCountries(result)
// }


// function region1(){
//     let data = [...countries]
//     let result = data.sort((a,b)=>a.region.localeCompare(b.region));
//     setCountries(result)
// }

// function region2(){
//   let data = [...countries]
//   let result = data.sort((a,b)=>b.region.localeCompare(a.region));
//   setCountries(result)
// }
  
// function capital1(){
//     let data = [...countries]
//     let result = data.sort((a,b)=>{
//       let a1 = a.capital ? a.capital[0] :""
//       let b1 = b.capital ? b.capital[0] :""
//      return a1.localeCompare(b1)
//     });
//     setCountries(result)
// }

// function capital2(){
//   let data = [...countries]
//   let result = data.sort((a,b)=>{
//     let a1 = a.capital ? a.capital[0] :""
//     let b1 = b.capital ? b.capital[0] :""
//    return b1.localeCompare(a1)
//   });
//   setCountries(result)
// }

// function Continent1(){
//   let data = [...countries]
//   let result = data.sort((a,b)=>{
//     let a1 = a.continents ? a.continents[0] :""
//     let b1 = b.continents ? b.continents[0] :""
//    return a1.localeCompare(b1)
//   });
//   setCountries(result)
// }

// function Continent2(){
// let data = [...countries]
// let result = data.sort((a,b)=>{
//   let a1 = a.continents ? a.continents[0] :""
//   let b1 = b.continents ? b.continents[0] :""
//  return b1.localeCompare(a1)
// });
// setCountries(result)
// }



   
//search functionality along with the multiple values



useEffect(()=>{
    
  let fetchData = async ()=>{
    
   try {
    let response = await axios.get("https://restcountries.com/v3.1/all")
    if(response.status!==200){
     throw new Error("invalid")
    }
    let data = response.data;
    setCountries(data)
    setFiltered(data)
   } catch (error) {
      console.log(error)
   }

 
  }

  fetchData()

}, [])


 
useEffect(()=>{
  
  if(search.toLocaleLowerCase() === ""){
      setCountries([...countries])
  }else{
    let result = countries.filter((f)=>{
      return ((f.region && f.region.toLowerCase().includes(search.toLowerCase()))||
    
      ((f.capital && f.capital[0].toLowerCase().includes(search.toLowerCase())))
    )
  })
  setFiltered(result)
  }


 
}, [search])

 

 function handleChange(e){
  setSearch(e.target.value.toLowerCase())
}

  return (
    <div className="App">

      
      <input type="text"  onChange={handleChange}  placeholder="enter the search keyword " />
      


         {/* <button onClick={lowPopBtn}> low population</button>
       <button onClick={highPopBtn} > High population</button>  
    
        <button onClick={region1}> A-Z Region </button>
       <button onClick={region2}> Z-A Region </button>  

        <button onClick={capital1}> A-Z capital </button>
       <button onClick={capital2}> Z-A capital</button> 

       <button onClick={Continent1}> A-Z Continents </button>
       <button onClick={Continent2}> Z-A Continents</button> */}

      {/* <table className="table">
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
          {countries.map((country, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{country.region}</td>
              <td>{country.capital}</td>
              <td>{country.continents}</td>
              <td>{country.population}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
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
          {filtered.map((country, index) => (
            <tr key={index}>
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
