import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import compose from '../../utils';
import { withBookstoreService } from '../HOC';
import { fetchBooks, bookAddedToCart } from '../../actions';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';
import BookListItem from '../Book-list-item';
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
	return (
		<ul className="book-list">
			{books.map((book) => {
				return (
					<BookListItem key={book.id} book={book} onAddedToCart={() => onAddedToCart(book.id)} />
				);
			})}
		</ul>
	);
};

const BookListContainer = ({ books = [], loading = false, error = null, fetchBooks, onAddedToCart }) => {
	useEffect(fetchBooks, [fetchBooks]);

	return loading ? (
		<Spinner />
	) : error ? (
		<ErrorIndicator />
	) : (
		<BookList books={books} onAddedToCart={onAddedToCart} />
	);
};

const mapStateToProps = ({ bookList: { books, loading, error }}) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	return {
		fetchBooks: fetchBooks(bookstoreService, dispatch),
		onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
	};
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
