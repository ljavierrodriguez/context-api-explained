import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';

const Home = props => {
    const [state, setState] = useState({
        people: null,
    })
    const { store, actions } = useContext(Context);

    useEffect(() => {
        getCharaters("https://swapi.dev/api/people/");
    }, [])

    const getCharaters = async url => {
        const response = await fetch(url);
        const data = await response.json();
        setState({
            ...state,
            people: data
        })
    }

    return (
        <>
            <ul>
                {
                    !!store.people &&
                    store.people.results.map((character, i) => {
                        return <li key={i}>{character.name}</li>
                    })
                }
            </ul>
            <button className="btn btn-dark" onClick={() => actions.getCharaters(store.people.next.replace("http", "https"))}>Next</button>
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <>
                                <h1>Home</h1>
                                <p>{store.name}</p>
                            </>
                        )
                    }
                }
            </Context.Consumer>
            <p>{store.name}</p>
        </>
    )
}

export default Home;