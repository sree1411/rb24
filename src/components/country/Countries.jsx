
import React from 'react';
import { useGetAllCountriesQuery, useGetCountryByNameQuery } from '../../services/countriesApi';

const Countries = () => {

  const { data: allCountriesData, isLoading: isAllCountriesLoading, error: allCountriesError } = useGetAllCountriesQuery();
  const { data: countryData, isLoading: isCountryLoading, error: countryError } = useGetCountryByNameQuery("india");

  return (
    <>
      <h4>Countries API Information</h4>

      {allCountriesError || countryError ? (
        <>Oh no, there was an error</>
      ) : isAllCountriesLoading || isCountryLoading ? (
        <>Loading...</>
      ) : (
        <>
          <h3>All Countries</h3>
          <ul>
            {allCountriesData && allCountriesData.map((country) => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
          <h3>Country Information (India)</h3>
          {countryData && countryData.map((c) => (
            <p key={c.cca3}>{c.name.common}</p>
          ))}
        </>
      )}
    </>
  );
}

export default Countries;
