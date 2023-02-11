import React from 'react'

import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons"

export const SearchBox = () => {
    return (
        <div className='searchBox'>
            <input type="text" placeholder='search....' />
            <button className='btn'>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}
