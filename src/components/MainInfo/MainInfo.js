import { useSelector } from 'react-redux';

import './MainInfo.css';

const MainInfo = () => {

    const city = useSelector(state => state.selectedCity);  

    const mainWeatherData = useSelector(state => {
        if (state.weatherData) {
            return ({
                weather: state.weatherData.weather[0].main,
                description: state.weatherData.weather[0].description,
                temp: ~~(parseFloat(state.weatherData.main.temp))
            })
        } else {
            return ({
                weather: 'Weather',
                description: 'Description',
                temp: '0'
            })
        }
    })

    return (
        <div className='main-info'>
            <div className='city-name'>{city ? `Weather today in ${city}` : 'Write the city'}</div>
            <div className='weather-descr'>
                <div className='weather-main'>{mainWeatherData.weather}</div>
                <div className='weather-description'>{mainWeatherData.description}</div>
            </div>
            <div className='weather-meaning'>{mainWeatherData.temp}°</div>
        </div>
    )
}

export default MainInfo;