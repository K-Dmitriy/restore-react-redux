import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import compose from '../../utils';
import { withBookstoreService } from '../HOC';
import { booksLoaded, booksRequested } from '../../actions';
import Spinner from '../Spinner';
import BookListItem from '../Book-list-item';
import './book-list.css';

const BookList = ({ books = [], loading = false, bookstoreService, booksLoaded, booksRequested }) => {
	useEffect(() => {
		bookstoreService.getBooks().then((data) => booksLoaded(data));

		return booksRequested;
	}, []);

	return loading ? (
		<Spinner />
	) : (
		<ul className="book-list">
			{books.map((book) => {
				return <BookListItem key={book.id} {...book} />;
			})}
		</ul>
	);
};

const mapStateToProps = ({ books, loading }) => ({ books, loading });

const mapDispatchToProps = { booksLoaded, booksRequested };

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookList);
