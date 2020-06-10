import React, { useState, useEffect } from 'react';
import getState from './flux';

export const Context = React.createContext(null);

const inyectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store, 
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign({...state.store, ...updateStore}),
                actions: {...state.actions} 
            })
        }));

        useEffect(() => {
            // funcion que se ejecuta al cargar la pagina
            state.actions.getCharaters("https://swapi.dev/api/people/");

        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props}/>
            </Context.Provider>
        )
    }

    return StoreWrapper;
}

export default inyectContext;