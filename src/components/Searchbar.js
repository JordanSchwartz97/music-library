import React from 'react'

 function SearchBar(props) {
    return (
        <div>
            <label htmlFor="search">Search</label>
            <input type="text" value={props.inputValue} onChange={props.musicFilterOnChange}/>
        </div>
    )
}

export default SearchBar