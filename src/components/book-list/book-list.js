import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withService from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
    return(
        <ul className="book-list">
            { books.map(item => {
                    return (
                        <BookListItem book={ item } key={ item.id } 
                            onAddedToCart={ () => { onAddedToCart(item.id) } } />
                    );
                }) }
        </ul>
    );
};

class BookListContainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchBooks();
    }

    render(){

        const { books, loading, error, onAddedToCart } = this.props;

        if(error) return <ErrorIndicator />
        
        if(loading) return <Spinner />

        return(
            <BookList books={ books } onAddedToCart={ onAddedToCart } />
        );
    }
};

//В props компонента передаются текущие значения state
const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const { bookstore } = ownProps;

    return {
        fetchBooks: fetchBooks(bookstore, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
};

//В качестве props передается компонент Bookstore для получения имитационных данных
export default withService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));