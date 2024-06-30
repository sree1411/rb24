import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countriesApi'

const Countries = () => {

  const {data, isLoading} = useGetAllCountriesQuery('');
  console.log(data, isLoading)

  return (
       <>
        
          <h4> Countries Api Information </h4>
          {
            isLoading && <p> Loading please wait .......</p>
          }
          {
            !isLoading &&  data.map((c)=>(
                <>
                  <li>{c.name.common}</li>
                </>
            ))
          }
       
       
       </>
  )
}

export default Countries