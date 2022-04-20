import React, {useContext} from 'react';
import {BookContext} from "../contexts/BookContext";
import BookDetail from "./BookDetail";

const BookList = () => {

   const {books} = useContext(BookContext)

    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map(book => {
                    return (<BookDetail book={book} key={book.id} />)
                })}
            </ul>
        </div>
    ) : (
        <div className='empty'>
            <h5>No books to read. Hello free time :) </h5>
        </div>
    )
};

export default BookList;