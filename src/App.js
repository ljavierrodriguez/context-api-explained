import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Navbar from './components/navbar';
import inyectContext from './store/appContext';
import About from './views/about';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default inyectContext(App);