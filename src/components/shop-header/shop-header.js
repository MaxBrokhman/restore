import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './shop-header.css';

const ShopHeader = ({ itemsNumber, total }) => {
    return(
        <header className="shop-header row">
            <Link to="/restore/">
                <div className="logo">ReStore</div>
            </Link>
            <Link to="/restore/cart/">
            <div className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                { itemsNumber } items (${ total })
            </div>
            </Link>
        </header>
    );
};

//Читает из state значения количества и стоимости товаров в корзине
const mapStateToProps = ({ cartItems, orderTotal }) => {
    return{
        itemsNumber: cartItems.reduce((sum, current) => sum + current.count, 0),
        total: orderTotal
    }
};

export default connect(mapStateToProps)(ShopHeader);