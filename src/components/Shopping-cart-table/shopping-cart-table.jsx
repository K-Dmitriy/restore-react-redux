import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';

const ShoppingCartTable = ({ items = [], total = 0, onIncrease, onDecrease, onDelete }) => {
	const renderRow = (item, idx) => {
		const { id, title, count, total } = item;

		return (
			<tr key={id}>
				<td>{idx + 1}</td>
				<td>{title}</td>
				<td>{count}</td>
				<td>${total}</td>
				<td>
					<button
						className="btn btn-outline-danger btn-sm float-right"
						onClick={() => onDelete(id)}
					>
						<i className="fa fa-trash-o"></i>
					</button>
					<button
						className="btn btn-outline-success btn-sm float-right"
						onClick={() => onIncrease(id)}
					>
						<i className="fa fa-plus-circle"></i>
					</button>
					<button
						className="btn btn-outline-warning btn-sm float-right"
						onClick={() => onDecrease(id)}
					>
						<i className="fa fa-minus-circle"></i>
					</button>
				</td>
			</tr>
		);
	};

	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{items.map(renderRow)}</tbody>
			</table>

			<p className="total">Total: ${total}</p>
		</div>
	);
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
	return {
		items: cartItems,
		total: orderTotal,
	};
};

const mapDispatchToProps = () => {
	return {
		onIncrease: (id) => {
			console.log('Increase', id);
		},
		onDecrease: (id) => {
			console.log('Decrease', id);
		},
		onDelete: (id) => {
			console.log('Delete', id);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
