import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import compose from '../../utils';
import { withBookstoreService } from '../HOC';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';
import BookListItem from '../Book-list-item';
import './book-list.css';

const BookList = ({ books = [], loading = false, error = null, fetchBooks }) => {
	useEffect(fetchBooks, [fetchBooks]);

	return loading ? (
		<Spinner />
	) : error ? (
		<ErrorIndicator />
	) : (
		<ul className="book-list">
			{books.map((book) => {
				return <BookListItem key={book.id} {...book} />;
			})}
		</ul>
	);
};

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;

	return {
		fetchBooks: () => {
			dispatch(booksRequested());

			bookstoreService
				.getBooks()
				.then((data) => dispatch(booksLoaded(data)))
				.catch((err) => dispatch(booksError(err)));
		},
	};
};

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookList);
