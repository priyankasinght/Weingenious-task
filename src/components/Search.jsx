import React from 'react'
import "./Search.css"

const Search = ({ search, setSearch }) => {
    return (
        <div className='container'>

            <div className='src'>
                <h3>search</h3>
            </div>
            <div className='src-box'>
                <input type='text'
                    placeholder='search receipe'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

        </div>
    )
}

export default Search