import React, { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'
import styles from './WeatherApp.module.css'

const WeatherApp = () => {
    const [weather, setweather] = useState(null)

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])

    const loadInfo = async (city = 'Cartagena') => {
        try {
            const res = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const json = await res.json()
            console.log(json)

            setweather(json)
        } catch (error) { 
        }
    }

    const handleChangeCity = (city) => {
        setweather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            <WeatherMainInfo weather={weather}/>
        </div>
    )
}

export default WeatherApp