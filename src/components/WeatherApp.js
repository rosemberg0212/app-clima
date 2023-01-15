import React, { useEffect, useState } from 'react'
import WeatherMainInfo from './WeatherMainInfo'
import styles from './WeatherApp.module.css'

const WeatherApp = () => {
    const [search, setsearch] = useState('Medellin')
    const [values, setvalues] = useState('')

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_KEY}`

    const getData = async ()=>{
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data)
        if(data.cod >= 400){
            setvalues(false)
        }else{
            setvalues(data)
        }
    }
    
    const onChange = (e)=>{  
        if(e.key === 'Enter'){
            console.log(e.target.value)
            setsearch(e.target.value)
        }
        
    }

    useEffect(() => {
      getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    

    return (
        <div className={styles.weatherContainer}>
        <h2>Ingrese Ciudad a Consultar Clima</h2>
            <input 
                onKeyDown={onChange}
                type='text'
                autoFocus
                className={styles.input}
            />
            <WeatherMainInfo values={values}/>
        </div>
    )
}

export default WeatherApp