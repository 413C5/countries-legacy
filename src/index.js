import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  const handleQueryChanged = (event) => {
    return (
      setQuery(event.target.value)
    )
  }

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(
        query.toLowerCase()
      )
    )
  })

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data.map(
        ({ name, capital, population, languages, flags }) => {
          return ({
            name: name.common,
            capital,
            population,
            languages,
            flags
          })
        }))
      )
  }, [])

  //console.log(countries)
  //console.log(filteredCountries)

  return (
    <div>
      <p>
        find countries <input value={query} onChange={handleQueryChanged} />
      </p>
      {filteredCountries.length > 10 && (
        <div>
          Too many matches,specify another filter
        </div>
      )}
      {filteredCountries.length <= 10 &&
        filteredCountries.length > 1 &&
        filteredCountries.map((country) => {
          return (
            <div key={country.name}>{country.name}</div>
          )
        })
      }
      {filteredCountries.length === 1 && (
        <div>
          <h1>{filteredCountries[0].name}</h1>
          <div>capital {filteredCountries[0].capital}</div>
          <div>population {filteredCountries[0].population}</div>
          <h2>languages:</h2>
          <ul>
            {Object.values(filteredCountries[0].languages).map((language) => {
              return (
                <li key={language}>{language}</li>
              )
            })
            }
          </ul>
          <div><img
            src={filteredCountries[0].flags.png}
            alt={`${filteredCountries[0].name} flag`}
            width="128"
            height="128"
          /></div>
        </div>
      )}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
