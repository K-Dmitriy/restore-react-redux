import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import compose from '../../utils';
import { withBookstoreService } from '../HOC';
import { booksLoaded } from '../../actions';
import Spinner from '../Spinner';
import BookListItem from '../Book-list-item';
import './book-list.css';

const BookList = ({ books = [], loading = false, bookstoreService, booksLoaded }) => {
	useEffect(() => {
		bookstoreService.getBooks().then((data) => booksLoaded(data));
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

const mapDispatchToProps = { booksLoaded };

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookList);
