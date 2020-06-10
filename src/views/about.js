import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const About = props => {

    const { store, actions } = useContext(Context);

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
        </>
    )
}

export default About;