import React from "react";
import Weather from "./Weather";

const CountryDetails = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <div>
                capital {country.capital[0]}
            </div>
            <div>
                population {country.population}
            </div>
            <h2>Spoken languages:</h2>
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
                width="228"
                height="128"
            />
            </div>
            <Weather capital={country.capital[0]} />
        </div >
    )
}

export default CountryDetails