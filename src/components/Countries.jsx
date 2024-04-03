import { useEffect, useState } from "react";



function Countries(){

    const [Countries, setCountries] = useState([])
    const [newcountries, setNewCountries] = useState([])

    useEffect(()=>{
        async function logMovies() {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries([...data])
          }
          logMovies()
       }, [])

    const handleChange =(e)=>{
        setNewCountries(e.target.value)
    }

   

//    // we can also write like this way 
//    let filterCountry1 = () => {
// //     if (newcountries) {
// //         return countries.filter(country => country.region === newcountries);
// //     } else {
// //         return countries;
// //     }
// //    }; ela kuda rayavachu


    let fileterCountry;
    if(newcountries){
        fileterCountry = Countries.filter(country =>country.region === newcountries)
    }else{
        fileterCountry = Countries
    }


    const uniqueRegion =(Countries)=>{
       let regions = Countries.map(country => country.region)
       let duplicateRegions = Array.from(new Set(regions))
       return duplicateRegions
    }


    // let unqi;
    // if(Countries){
    //     unqi = Countries.map(country =>country.region)
    //     let duplicateRegions = Array.from(new Set(unqi))
    //      return duplicateRegions
    // } ela kuda rayavachu
 
    let LCountries = uniqueRegion(Countries).sort()
    console.log(LCountries)


    return(
        <> 


             <select value={newcountries}  onChange={handleChange}>
               {
                LCountries.map((region)=>(
                       <option value={region}> {region} </option>
                ))
               }
             </select>
   



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
                    {
                        fileterCountry.map((country, i)=>{
                            return(
                                <tr>
                                <th scope="row">{i+1}</th>
                                <td>{country.region}</td>
                                <td>{country.subregion}</td>
                                <td>{country.population}</td>
                            
                                </tr>
                            )
                        })
                    }
                  
                
                
                </tbody>
                </table>
        </>
    )
}
export default Countries;