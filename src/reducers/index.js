const initState = {
	books: [
		{ id: 1, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
		{ id: 2, title: 'Clean Code', author: 'Robert C. Martin' },
	],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'BOOKS_LOADED':
			return {
				books: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
