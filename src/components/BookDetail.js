import React, {useContext} from 'react';
import {BookContext} from "../contexts/BookContext";

const BookDetail = ({book}) => {
    const {dispatch} = useContext(BookContext)
    return (
        <li onClick={() => dispatch({
            type: 'REMOVE_BOOK',
            id: book.id
        })}>

            <h3 className='title'>{book.title}</h3>
            <p className="author">{book.author}</p>
        </li>
    );
};

export default BookDetail;