import './Search.css'

const Search = () => {
    return (
        <div className='search'>
            <input type='text' placeholder='City' className='search-input'/>
            <button className='search-button'>Search</button>
        </div>
    )
}

export default Search;