export default class BookstoreService {
	getBooks() {
		return [
			{
				id: 1,
				title: 'Eloquent JavaScript',
				author: 'Marijn Haverbeke',
				price: 23.99,
				coverImage:
					'https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg',
			},
			{
				id: 2,
				title: 'Clean Code',
				author: 'Robert C. Martin',
				price: 33.43,
				coverImage:
					'https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg',
			},
		];
	}
}
