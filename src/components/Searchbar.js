import React from 'react'
import "./Searchbar.css"
 function SearchBar(props) { 
     return (
         <div className="input">
             <label htmlFor="search">Search:</label>
             <input type="text" placeholder={props.inputValue} onChange={props.musicFilterOnChange}/>
         </div>
         )
        }
        
        export default SearchBar
        
        
        