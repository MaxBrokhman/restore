import React from 'react';

import './shop-header.css';

const ShopHeader = ({ itemsNumber, total }) => {
    return(
        <header className="shop-header row">
            <a className="logo" href="#">ReStore</a>
            <a className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                { itemsNumber } items (${ total })
            </a>
        </header>
    );
};

export default ShopHeader;