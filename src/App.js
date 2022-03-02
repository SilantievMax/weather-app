import React from "react";

import './App.css'

import WeatherLeft from './components/WeatherLeft'
import WeatherRight from './components/WeatherRight'
import Form from './components/Form'

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    humidity: undefined,
    pressure: undefined,
    speed: undefined,
    clouds: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if(city) {
      const lang = await 'ru';
      const api_url = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0946e72c9fb742c96358dbe8f293c573&lang=${lang}&units=metric`);
      const data = await api_url.json();
      console.log(data)
      function dateTranslation(getDate) {
        var date = new Date();
        date.setTime(getDate);
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      }

      this.setState({
        temp: data.main.temp,
        city: data.name,
        sunrise: dateTranslation(data.sys.sunrise),
        sunset: dateTranslation(data.sys.sunset),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weather: data.weather[0].description,
        speed: data.wind.speed,
        clouds: data.clouds.all
      });
    } else {
      this.setState({
        error: "Вы забыли ввести город"
      });
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="left">
          <div className="fonLeft">
          <WeatherLeft 
            city={this.state.city}
            temp={this.state.temp}
            weather={this.state.weather}
          />
          </div>
        </div>
        <div className="right">
          <Form weatherMethod={this.gettingWeather}/>
          <WeatherRight
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            error={this.state.error}
            speed={this.state.speed}
            clouds={this.state.clouds}
      />
        </div>
      </div>
    );
  }
}

export default App;