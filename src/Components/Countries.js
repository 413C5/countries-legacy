import React from "react";
import CountryDetails from "./CountryDetails";

const Countries = ({ query, handleQueryChanged, filteredCountries, handleShowCountryChanged, showCountry }) => {
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
          <CountryDetails country={filteredCountries[0]} />
        )}
        {showCountry.name && <CountryDetails country={showCountry} />}
      </div>
    )
  }


export default Countries