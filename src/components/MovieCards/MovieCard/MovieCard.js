import React, { useContext } from 'react';
import { NominationsProvider } from '../../../contexts/Nominations/NominationsContext';
import './MovieCard.css';

function MovieCard({ title, year, imdbID, img, buttonType }) {
    const imdbURL = `https://imdb.com/title/${imdbID}`
    const { nominationsList, dispatch } = useContext(NominationsProvider);
    // Nomination button will be disabled when the user has selected 5 movies, 
    // or have already nominated the movie
    const disableNomination = (
        nominationsList.some(movie => movie.imdbID === imdbID) ||
        nominationsList.length === 5
    )

    // Handle nominating a movie
    const handleNominate = () => {
        const movie = {
            title,
            year,
            imdbID,
            img
        };
        // Add the movie to the nominations list
        dispatch({type: 'nominationsList/addNomination', payload: movie})
    };

    // Handle removing a nomination
    const removeNomination = () => {
        dispatch({type: 'nominationsList/deleteNomination', payload: imdbID})
    }

    // Set the type of button depending on if the movie card is from the search data
    // or the nominees list.
    const displayButtonType = (type) => {
        if(type === 'nominate') {
            return (
                disableNomination ? <button disabled>Nominate</button> :
                    <button onClick={handleNominate}>Nominate</button>
            );
        } else if(type === 'remove') {
            return (
                <button
                    className='remove' 
                    onClick={removeNomination}
                >Remove</button>
            );
        };
    };
    
    return (
        <div className='movie-card'>
            <img src={img} alt={title} />
            <div className='movie-details'>
                <h4>{title}</h4>
                <p>{year}</p>
                <a href={imdbURL} target='_blank' rel='noreferrer'>Learn More</a>
            </div>
            { displayButtonType(buttonType) }
        </div>
    )
}

export default MovieCard
