import React from 'react';

import BookListItem from '../Book-list-item';
import './book-list.css';

const BookList = ({ books = [] }) => {
	return (
		<ul>
			{books.map((book) => {
				return <BookListItem key={book.id} {...book} />;
			})}
		</ul>
	);
};

export default BookList;
