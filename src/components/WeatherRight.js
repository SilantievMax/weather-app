import React from "react";

import '../style/WeatherRight.css'

const WeatherRight = (props) => {
    return (
        <div className="weatherRight">
            {props.humidity &&
                <div>
                    <ul>
                        <li>Влажность {props.humidity} %</li>
                        <li>Облачность, {props.clouds} %</li>
                        <li>Скорость ветра {props.speed} метр/сек</li>
                        <li>Атмосферное давление {props.pressure} гПа</li>
                        <li>Восход солнца в {props.sunrise} утра</li>
                        <li>Заход солнца в {props.sunset} вечера</li>
                    </ul>
                </div>
            }
            <p>{props.error}</p>
        </div>
    );
}

export default WeatherRight;