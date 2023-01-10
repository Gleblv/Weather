import './search.css'

const Search = () => {
    return (
        <div className='serch'>
            <input type='text' placeholder='City' className='search-input'/>
            <button className='search-button'>Поиск</button>
        </div>
    )
}

export default Search;