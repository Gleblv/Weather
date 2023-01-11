import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHttp } from '../../hooks/useHttp';
import { setData, setSelectCity } from '../../actions/actions';

import './Search.css';

const Search = () => {
    const _ApiKey = '764fdc74ddc4e91de9a34187c8deacb3';
    const dispatch = useDispatch();
    const {request} = useHttp();

    const [city, setSity] = useState('');

    const getSity = (e) => {
        setSity(e.target.value);
    }

    const onClickBtn = () => {
        dispatch(setSelectCity(city))
        setSity('');
        request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${_ApiKey}&units=metric`)
            .then(data => dispatch(setData(data)));
    }

    return (
        <div className='search'>
            <input onChange={(e) => getSity(e)} value={city} type='text' placeholder='City' className='search-input'/>
            <button onClick={onClickBtn} className='search-button'>Search</button>
        </div>
    )
}

export default Search;