import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppLayout } from './app';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppLayout />
		</Provider>
	</React.StrictMode>,
);
