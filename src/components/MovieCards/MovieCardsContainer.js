import React, { useContext } from 'react';
import './MovieCardsContainer.css';
import MovieCard from './MovieCard/MovieCard';
import { SearchData } from '../../contexts/Search/SearchContext';
import { NominationsProvider } from '../../contexts/Nominations/NominationsContext';

function MovieCardsContainer({ type }) {
    // Depending on where the movie cards container is located, the container will
    // display either the search data, or the list of nominees.
    const { searchData } = useContext(SearchData);
    const { nominationsList } = useContext(NominationsProvider);

    return (
        <div className='cards-container'>
            { type === 'searchData' ? 
                searchData.map((movie, index) => (
                    <MovieCard 
                        key={index}
                        title={movie.Title}
                        year={movie.Year}
                        imdbID={movie.imdbID}
                        img={movie.Poster}
                        buttonType='nominate'
                    />
                )) :
                nominationsList.map((movie, index) => (
                    <MovieCard 
                        key={index}
                        title={movie.title}
                        year={movie.year}
                        imdbID={movie.imdbID}
                        img={movie.img}
                        buttonType='remove'
                    />
                ))
            }
        </div>
    )
}

export default MovieCardsContainer
