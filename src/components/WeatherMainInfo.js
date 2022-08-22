import React from 'react'
import styles from './weatherMainInfo.module.css'

const WeatherMainInfo = ({ weather }) => {
    return (
        <div className={styles.content}>
            <div className={styles.infoContainer}>
                <p>{weather?.location.name}, {weather?.location.region}</p>
                <div className={styles.time_now}>
                    <h4>TIEMPO ACTUAL</h4>
                    <p>{weather?.location.localtime}</p>
                </div>

                <div className={styles.info_grados}>
                    <img src={`http:${weather?.current.condition.icon}`} alt='icon' />
                    <h3>{weather?.current.temp_c}°C</h3>
                    <p>{weather?.current.condition.text}</p>
                </div>

                <div className={styles.info_general}>
                    <div>
                        <p>VIENTO</p>
                        <p>{weather?.current.wind_kph} Km/h</p>
                    </div>
                    <div>
                        <p>HUMEDAD</p>
                        <p>{weather?.current.humidity} %</p>
                    </div>
                    <div>
                        <p>VISIBILIDAD</p>
                        <p>{weather?.current.vis_km} km</p>
                    </div>
                    <div>
                        <p>PRESIÓN</p>
                        <p>{weather?.current.pressure_mb} mbar</p>
                    </div>
                </div>
            </div>

            <iframe
                title='mapa'
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105587.80203379552!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1661140661144!5m2!1ses!2sco`}
                width="400"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default WeatherMainInfo