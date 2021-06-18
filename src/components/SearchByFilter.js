import React from 'react'
import "./SearchByFilter.css"

function SearchByFilter() {
    return (
        <div>
            <form class="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i class="fa fa-search">Search</i></button>
            </form>
        </div>
    )
}
export default SearchByFilter