import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../HOC';
import { booksLoaded } from '../../actions';
import BookListItem from '../Book-list-item';
import './book-list.css';

const BookList = ({ books = [], bookstoreService, booksLoaded }) => {
	useEffect(() => {
		booksLoaded(bookstoreService.getBooks());
	}, []);

	return (
		<ul>
			{books.map((book) => {
				return <BookListItem key={book.id} {...book} />;
			})}
		</ul>
	);
};

const mapStateToProps = ({ books }) => ({ books });

const mapDispatchToProps = { booksLoaded };

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
