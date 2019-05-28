import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, cover } = book;
    return(
        <li className="book-list-item">
            <div className="book-cover">
                <img src={ cover } alt="book cover"></img>
            </div>
            <div className="book-details">
                <span className="book-title">{ title }</span>
                <div className="book-author">{ author }</div>
                <div className="book-price">{ price }</div>
                <button className="btn btn-info add-to-cart"
                        onClick={ onAddedToCart }>
                    Add to cart
                </button>
            </div>
        </li>
    );
};

export default BookListItem;