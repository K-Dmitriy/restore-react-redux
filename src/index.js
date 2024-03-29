import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBoundary from './components/Error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/Bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<BookstoreServiceProvider value={bookstoreService}>
					<Router>
						<App />
					</Router>
				</BookstoreServiceProvider>
			</ErrorBoundary>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
