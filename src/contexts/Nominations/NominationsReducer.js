// Get the nominations list from local storage if it exists
export const initialNominationsList = JSON.parse(localStorage.getItem('nominations')) || [];

// Nominations list reducer
export default function reducer(list=initialNominationsList, action) {
    let newList;
    switch(action.type) {
        case 'nominationsList/addNomination':
            newList = [...list, action.payload];
            localStorage.setItem('nominations', JSON.stringify(newList));
            return newList;
        case 'nominationsList/deleteNomination':
            newList = list.filter(nomination => nomination.imdbID !== action.payload);
            localStorage.setItem('nominations', JSON.stringify(newList));
            return newList;
        default:
            return list;
    }
}
