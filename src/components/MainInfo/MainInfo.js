import './MainInfo.css';

const MainInfo = () => {
    return (
        <div className='main-info'>
            <div className='city-name'>Weather today in <br/> London</div>
            <div className='weather-descr'>
                <div className='weather-main'>Drizzle</div>
                <div className='weather-description'>light intensity drizzle</div>
                <div className='weather-ico'>Ico</div>
            </div>
            <div className='weather-meaning'>-2</div>
        </div>
    )
}

export default MainInfo;