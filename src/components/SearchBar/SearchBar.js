import React, { useContext } from 'react';
import { SearchData } from '../../contexts/Search/SearchContext';
import './SearchBar.css';

function SearchBar() {
    const {search, setSearch} = useContext(SearchData)

    const handleSearch = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <input
            type='text'
            placeholder='Search'
            value={search}
            onChange={e => handleSearch(e)}
        />
    )
}

export default SearchBar
