import React from 'react';

import './book-list-item.css';

const BookListItem = ({ title, author }) => {
	return (
		<li>
			<b>Title:</b> {title}; <b>Author:</b> {author}
		</li>
	);
};

export default BookListItem;
