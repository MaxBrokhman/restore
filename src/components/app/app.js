import React from 'react';
import withService from '../hoc';
import { HomePage, CartPage } from '../pages';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';

const App = ({ bookstore }) => {
    return(
        <main role="main" className="container">
            <ShopHeader itemsNumber={5} total={210} />
            <Switch>
                <Route path="/" component={ HomePage } exact />
                <Route path="/cart" component={ CartPage }  />
            </Switch>
        </main>
    );
};

export default withService()(App);