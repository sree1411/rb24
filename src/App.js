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

  return (
    <div className="App">
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
