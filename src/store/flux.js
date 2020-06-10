const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: null,
            name: 'Luis',
            age: 38,
        },
        actions: {
            getCharaters: async url => {
                const response = await fetch(url);
                const data = await response.json();
                setStore({
                    people: data
                })
            }
        }
    }
}

export default getState;