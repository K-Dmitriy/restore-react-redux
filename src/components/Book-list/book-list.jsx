import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ books }) => {
	return { books };
};

export default connect(mapStateToProps)(BookList);
