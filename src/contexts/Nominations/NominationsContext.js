import React, { useReducer, createContext } from 'react';
import reducer, { initialNominationsList } from './NominationsReducer';

export const NominationsProvider = createContext();
    
function NominationsContext({ children }) {
    const [nominationsList, dispatch] = useReducer(reducer, initialNominationsList);
    const nominationsContext = {
        nominationsList,
        dispatch
    };

    return (
        <NominationsProvider.Provider value={nominationsContext}>
            {children}
        </NominationsProvider.Provider>
    )
}

export default NominationsContext
