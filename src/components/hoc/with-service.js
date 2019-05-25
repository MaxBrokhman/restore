import React from 'react';
import { Consumer } from '../context';

const withService = () => (Wrapped) => {
    return (props) => {
        return(
            <Consumer>
                {
                    (bookstore) => <Wrapped {...props} bookstore={ bookstore }/>
                }
            </Consumer>
        );
    };
};

export default withService;