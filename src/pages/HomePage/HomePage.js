import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { FaSearch } from 'react-icons/fa';
import './HomePage.css';
import MovieCardsContainer from '../../components/MovieCards/MovieCardsContainer';
import Banner from '../../components/Banner/Banner';
import { NominationsProvider } from '../../contexts/Nominations/NominationsContext';

function HomePage() {
    const [openBanner, setOpenBanner] = useState(false);
    const { nominationsList } = useContext(NominationsProvider);

    // Handle closing banner when user clicks away outside the banner.
    const handleClose = () => {
        setOpenBanner(false);
    };

    // Open the banner when the user has selected 5 nominees.
    useEffect(() => {
        if(nominationsList.length === 5) {
            setOpenBanner(true);
        };
    }, [nominationsList]);

    return (
        <div className='homepage'>
            <div className="top-container">
                <FaSearch className='search-icon' />
                <SearchBar />
            </div>
            <div className="body-containers">
                <div className="left-container">
                    <h2>Movies</h2>
                    <MovieCardsContainer type='searchData'/>
                </div>
                <div className="right-container">
                    <h2>Nominations</h2>
                    <MovieCardsContainer type='nominations' />
                </div>
            </div>
            { openBanner && <Banner open={openBanner} handleClose={handleClose} />}
        </div>
    )
}

export default HomePage
