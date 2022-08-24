import React, { useState } from 'react'
import styles from './weatherForm.module.css'

const WeatherForm = ({ onChangeCity }) => {
    const [city, setcity] = useState('')

    const onChange = (e) => {
        const value = e.target.value;

        if (value !== '') {
            setcity(value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city)
    }

    return (
        <form onSubmit={onSubmit} className={styles.container}>
            <h2>Ingrese País o Ciudad a consultar clima</h2>
            <input type='text' onChange={onChange} className={styles.input} />
        </form>
    )
}

export default WeatherForm