import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState([])

    const api_key = process.env.REACT_APP_API_KEY

    //console.log(api_key)
    //console.log(capital)
    useEffect(() => {
        axios
            .get(
                `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
            )
            .then((response) => {
                setWeather(response.data.current)
                console.log(response)
            })
        return () => setWeather({})
    }, [capital])

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>
                <b>temperature:</b> {weather.temperature} Celsius
            </p>
            <img
                src={weather.weather_icons}
                alt={`${capital} weather icon`}
                width="64"
                height="64"
            />
            <p>
                <b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}
            </p>
        </div>
    )
}

export default Weather