import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { object } from 'yup';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">altSpellings</th>
            <th scope="col">area</th>
            <th scope="col">borders</th>
            <th scope="col">capital</th>
            <th scope="col">car</th>
            <th scope="col">coatOfArms</th>
            <th scope="col">continents</th>
            <th scope="col">fifa</th>
            <th scope="col">flag</th>
            <th scope="col">flags</th>
            <th scope="col">idd</th>
            <th scope="col">latlng</th>
            <th scope="col">maps</th>
            <th scope="col">population</th>
            <th scope="col">region</th>
            <th scope="col">startOfWeek</th>
            <th scope="col">status</th>
            <th scope="col">subregion</th>
            <th scope="col">timezones</th>
            <th scope="col">tld</th>
            <th scope="col">capitalInfo</th>
            <th scope="col">currencies</th>
            <th scope="col">demonyms</th>
            <th scope="col">idd</th>

          </tr>
        </thead>
        <tbody>
          {countries.map((country, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{country.altSpellings}</td>
              <td>{country.area}</td>
              <td>{country.borders}</td>
              <td>{country.capital}</td>
              <td>{country.car.signs}</td>
              <td>
                <img src={country.coatOfArms.png} width='50px' alt='coatOfArms' />
              </td>
              <td>{country.continents}</td>
              <td>{country.fifa}</td>
              <td>{country.flag}</td>
              <td>
                <img src={country.flags.png} width='50px' alt='flags' />
              </td>
              <td>{country.idd.root}</td>
              <td>{country.latlng}</td>
              <td>
                <a target="_blank" href={country.maps.googleMaps}>{country.maps.googleMaps}</a>
              </td>
              <td>{country.population}</td>
              <td>{country.region}</td>
              <td>{country.startOfWeek}</td>
              <td>{country.status}</td>
              <td>{country.subregion}</td>
              <td>{country.timezones}</td>
              <td>{country.tld}</td>
              <td>{country.capitalInfo.latlng}</td>
              <td>
              {country.currencies ? (
                Object.entries(country.currencies).map(([currencyCode, currencyDetails]) => (
                  <div key={currencyCode}>
                    {currencyCode}: <br/> Name :{currencyDetails.name} <br/> symbol:({currencyDetails.symbol})
                     
                  
                  </div>
                ))
              ) : (
                <div>No currency data available</div>
              )}
            </td>
            <td>
              {country.demonyms ? (
                Object.entries(country.demonyms).map(([demonymsCode, demonymsDetails]) => (
                  <div key={demonymsCode}>
                    {demonymsCode}: <br/> Female :{demonymsDetails.f} <br/> Male:({demonymsDetails.m})
                     
                  
                  </div>
                ))
              ) : (
                <div>No currency data available</div>
              )}
            </td>

            {/* <td>
            {country.idd ? (
              <div>
                root: {country.idd.root} <br />
                suffixes: {country.idd.suffixes}
              </div>
            ) : (
              <div>No idd data available</div>
            )}
          </td> */}

          <td>
        {country.languages ? (
          Object.entries(country.languages).map(([languageCode, languageName]) => (
            <div key={languageCode}>
              {languageCode}: {languageName}
            </div>
          ))
        ) : (
          <div>No language data available</div>
        )}
      </td>

<td>
  {country.independent ? 'True' : 'No'}
</td>

      <td>
        {
          country.translations ?(
             Object.entries(country.translations).map(([key, value])=>{
              return <>
              <div key={key}>
              {key} :{value.official} {value.common}
              </div>
                 
              </>
             })
          ) :(<div>No language data available</div>) 
        }
      </td>







            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
