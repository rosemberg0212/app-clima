import React from 'react'
import styles from './weatherMainInfo.module.css'

const WeatherMainInfo = ({ values }) => {
    return (
        <>
            {
                values ? (
                    <div className={styles.content}>
                        <div className={styles.infoContainer}>
                            <p>{values?.name}, {values?.sys?.country}</p>
                            <div className={styles.time_now}>
                                <h4>TIEMPO ACTUAL</h4>
                                {/* <p>{values?.main?.temp}</p> */}
                            </div>

                            <div className={styles.info_grados}>
                                <img src={`http://openweathermap.org/img/wn/${values?.weather[0].icon}@2x.png`} alt='icon' />
                                <h3>{values?.main?.temp}°C</h3>
                                <p>{values?.weather[0]?.description}</p>
                            </div>

                            <div className={styles.info_general}>
                                <div>
                                    <p>HUMEDAD</p>
                                    <p>{values?.main?.humidity} %</p>
                                </div>
                                <div>
                                    <p>VISIBILIDAD</p>
                                    <p>{values?.visibility}</p>
                                </div>
                                <div>
                                    <p>PRESIÓN</p>
                                    <p>{values?.main?.pressure} mbar</p>
                                </div>
                            </div>
                        </div>

                        <iframe
                            title='mapa'
                            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105587.80203379552!2d${values?.coord.lon}!3d${values?.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1661140661144!5m2!1ses!2sco`}
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                ) : (
                    <h1>City not Found</h1>
                )
            }
        </>

    )
}

export default WeatherMainInfo