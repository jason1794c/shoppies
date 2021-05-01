import React, { useState, useEffect, useCallback, createContext } from 'react'

export const SearchData = createContext();

function SearchContext({ children }) {
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([])

    // This endpoint will search OMDB's database for movies. If successful, the response object
    // will return the first page of the search results of up to 10 movies.
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://omdbapi.com/?s=${search}&apikey=${api_key}`;

    const searchContext = {
        search,
        setSearch,
        searchData
    };

    // Handle searches and retrieve movie data
    const handleSearch = useCallback(async () => {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            // There will be times when the API returns an object with a Response property of 'False'.
            // Either the request returns too many results, or the search parameter cannot find anything.
            // In these cases, set the search data to an empty array.
            if(data.Response === 'False') {
                setSearchData([]);
            } else {
                setSearchData(data.Search);
            }
        } else {
            setSearchData([]);
        }
        
    }, [url]);

    useEffect(() => {
        handleSearch();
    }, [handleSearch, search]);

    return (
        <SearchData.Provider value={searchContext}>
            {children}
        </SearchData.Provider>
    )
}

export default SearchContext
