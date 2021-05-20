import React from 'react';

import BookList from '../components/Book-list';
import ShoppingCartTable from '../components/Shopping-cart-table';

const HomePage = () => {
	return (
		<div>
			<BookList />
			<ShoppingCartTable />
		</div>
	);
};

export default HomePage;
