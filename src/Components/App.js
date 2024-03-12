import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [showCountry, setShowCountry] = useState({})

  const handleShowCountryChanged = (name) => () => {
    return (
      setShowCountry(
        filteredCountries.filter((country) => {
          return (
            country.name.includes(name)
          )
        })[0]
      )
    )
  }

  const handleQueryChanged = (event) => {
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
    <Countries query={query}
      handleQueryChanged={handleQueryChanged}
      filteredCountries={filteredCountries}
      handleShowCountryChanged={handleShowCountryChanged}
      showCountry={showCountry} />
  )
}

export default App