import React from "react";

import './WeatherLeft.css'

const WeatherLeft = (props) => {
    return (
        <div className="weatherLeft">
            {props.city &&
                <div>
                    <h2>Погода в городе {props.city}</h2>
                    <p className="temp">{Math.round(props.temp)}°C</p>
                    <p className="weather">{props.weather[0].toUpperCase()+props.weather.slice(1)}</p>
                </div>
            }
            <p>{props.error}</p>
            </div>
    );
}

export default WeatherLeft;