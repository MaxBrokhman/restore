import React from 'react';
import { HomePage, CartPage } from '../pages';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';

const App = () => {
    return(
        <main role="main" className="container">
            <ShopHeader />
            <Switch>
                <Route path="/restore/" component={ HomePage } exact />
                <Route path="/restore/cart/" component={ CartPage }  />
            </Switch>
        </main>
    );
};

export default App;