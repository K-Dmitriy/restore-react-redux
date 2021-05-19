import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../HOC';
import BookListItem from '../Book-list-item';
import './book-list.css';

const BookList = (props) => {
	const { books, bookstoreService } = props;

	useEffect(() => {
		const data = bookstoreService.getBooks();
		console.log(data);

		props.booksLoaded(data);
	}, []);

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

const mapDispatchToProps = (dispatch) => {
	return {
		booksLoaded: (newBooks) => {
			dispatch({
				type: 'BOOKS_LOADED',
				payload: newBooks,
			});
		},
	};
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
