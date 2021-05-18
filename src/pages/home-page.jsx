import React from 'react';

import BookList from '../components/Book-list';

const HomePage = () => {
	const books = [
		{ id: 1, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
		{ id: 2, title: 'Clean Code', author: 'Robert C. Martin' },
	];
	return (
		<>
			<h2>Home Page</h2>
			<BookList books={books} />
		</>
	);
};

export default HomePage;
