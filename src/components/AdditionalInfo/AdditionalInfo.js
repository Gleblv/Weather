import { useSelector } from 'react-redux';

import './AdditionalInfo.css';

const AdditionalInfo = () => {
    const additionalWeatherData = useSelector(state => {
        if (state.weatherData) {
            return ({
                minTemp: ~~(parseFloat(state.weatherData.main.temp_min)),
                maxTemp: ~~(parseFloat(state.weatherData.main.temp_max)),
                wind: ~~(parseFloat(state.weatherData.wind.speed)),
                visibility: state.weatherData.visibility
            })
        } else {
            return ({
                minTemp: 'Min temperature',
                maxTemp: 'Max temperature',
                wind: 'Wind',
                visibility: 'Visibility'
            })
        }
    })

    console.log(additionalWeatherData.wind);

    return (
        <ul className='additional-info'>
            <li className='additional-info-item'>
                <div className='additional-category'>Minimal temperature</div>
                <div className='additional-meaning'>{additionalWeatherData.minTemp}°</div>
            </li>
            <li className='additional-info-item'>
                <div className='additional-category'>Maximum temperature</div>
                <div className='additional-meaning'>{additionalWeatherData.maxTemp}°</div>
            </li>
            <li className='additional-info-item'>
                <div className='additional-category'>Wind</div>
                <div className='additional-meaning'>{additionalWeatherData.wind} km/h</div>
            </li>
            <li className='additional-info-item'>
                <div className='additional-category'>Visibility</div>
                <div className='additional-meaning'>{additionalWeatherData.visibility}</div>
            </li>
        </ul>
    )   
}

export default AdditionalInfo;