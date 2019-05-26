import React from 'react';
import withService from '../hoc';
import { HomePage, CartPage } from '../pages';
import { Route, Switch } from 'react-router-dom';

const App = ({ bookstore }) => {
    return(
        <Switch>
            <Route path="/" component={ HomePage } exact />
            <Route path="/cart" component={ CartPage }  />
        </Switch>
    );
};

export default withService()(App);