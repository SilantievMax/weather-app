import React from "react";

import './Form.css'

const Form = (props) => {
    return (
        <form className="form" onSubmit={props.weatherMethod}>
            <input className="formInput" type="text" name="city" placeholder="Введите свой город:" />
            <button className="formButton">Погода сегодня</button>
            <hr/>
        </form>
    )
}

export default Form;