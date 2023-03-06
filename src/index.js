import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const CountryDetails = ({ country }) =>{
  return(
    <div>
    <h1>{country.name}</h1>
    <div>capital {country.capital}</div>
    <div>population {country.population}</div>
    <h2>languages:</h2>
    <ul>
      {Object.values(country.languages).map((language) => {
        return (
          <li key={language}>{language}</li>
        )
      })
      }
    </ul>
    <div><img
      src={country.flags.png}
      alt={`${country.name} flag`}
      width="128"
      height="128"
    /></div>
  </div >
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [showCountry,setShowCountry]=useState({})

  const handleShowCountryChanged=(name)=>()=>{
    return(
      setShowCountry(
        filteredCountries.filter((country)=>{
          return(
            country.name.includes(name)
          )
        })[0]
      )
    )
  }

  const handleQueryChanged=(event)=>{
    setQuery(event.target.value)
    setShowCountry({})
  }

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(query.toLowerCase())
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
            <div key={country.name}>
              {country.name} <button onClick={handleShowCountryChanged(country.name)}>show</button>
            </div>
          )
        })
      }
      {filteredCountries.length === 1 && (
        <CountryDetails country={filteredCountries[0]}/>
        )}
      {showCountry.name && <CountryDetails country={showCountry}/>}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
