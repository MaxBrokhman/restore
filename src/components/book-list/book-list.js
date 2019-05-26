import React from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withService from '../hoc';
import booksLoaded from '../../actions';

import './book-list.css';

class BookList extends React.Component{

    componentDidMount(){
        const { bookstore } = this.props;
        this.props.booksLoaded(bookstore.getBooks());
    }

    render(){

        const { books } = this.props;

        return(
            <ul className="book-list">
                { books.map(item => {
                        return (
                            <BookListItem book={ item } key={ item.id } />
                        );
                    }) }
            </ul>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps =  {
    booksLoaded
};

export default withService()(connect(mapStateToProps, mapDispatchToProps)(BookList));