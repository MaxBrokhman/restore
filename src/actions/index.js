const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksError = (error) => {
    return{
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

const bookAddedToCart = (id) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: id
    }
};

const bookDeletedFromCart = (id) => {
    return {
        type: 'BOOK_DELETED_FROM_CART',
        payload: id
    }
};


//Уменьшение количества конкретной книги в корзине
const bookCountDecreased = (id) => {
    return {
        type: 'BOOK_CART_COUNT_DECREASED',
        payload: id
    };
};

const fetchBooks = (bookstore, dispatch) => () => {
    //На время загрузки данных loading в state изменяется на true
    dispatch(booksRequested());
    //получение имитационных данных
    bookstore.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(error => dispatch(booksError(error)));
}

export { fetchBooks, bookAddedToCart, bookDeletedFromCart, bookCountDecreased };