import React from 'react';

import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
	const { title, author, price, coverImage } = book;

	return (
		<li className="book-list-item">
			<div className="book-cover">
				<img src={coverImage} alt="Cover" />
			</div>
			<div className="book-details">
				<a href="!#" className="book-title">
					{title}
				</a>
				<div className="book-author">{author}</div>
				<div className="book-price">${price}</div>
				<button className="btn btn-info add-to-cart" onClick={onAddedToCart}>
					Add to cart
				</button>
			</div>
		</li>
	);
};

export default BookListItem;
