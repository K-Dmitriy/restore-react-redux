import React from 'react';
import { Link } from 'react-router-dom';

import './shop-header.css';

const ShopHeader = ({ numItems = 0, total = 0 }) => {
	return (
		<header className="shop-header row">
			<Link to="/">
				<span className="logo text-dark">ReStore</span>
			</Link>
			<Link to="/cart-page">
				<span className="shopping-cart">
					<i className="cart-icon fa fa-shopping-cart" />
					{numItems} items (${total})
				</span>
			</Link>
		</header>
	);
};

export default ShopHeader;
