import { useSelector } from 'react-redux';

import './MainInfo.css';

const MainInfo = () => {

    const city = useSelector(state => state.selectedCity);  

    const mainWeatherData = useSelector(state => {
        if (state.weatherData) {
            return ({
                weather: state.weatherData.weather[0].main,
                description: state.weatherData.weather[0].description,
                temp: ~~(parseFloat(state.weatherData.main.temp)),
                ico : state.weatherData.weather[0].icon
            })
        } else {
            return ({
                weather: 'Weather',
                description: 'Description',
                temp: '0',
                ico: 'Weather icon'
            })
        }
    })

    return (
        <div className='main-info'>
            <div className='city-name'>{city ? `Weather today in ${city}` : 'Write the city'}</div>
            <img src={`http://openweathermap.org/img/wn/${mainWeatherData.ico}@2x.png`} alt="Weather icon" className='main-ico'></img>
            <div className='weather-descr'>
                <div className='weather-main'>{mainWeatherData.weather}</div>
                <div className='weather-description'>{mainWeatherData.description}</div>
            </div>
            <div className='weather-meaning'>{mainWeatherData.temp}°</div>
        </div>
    )
}

export default MainInfo;