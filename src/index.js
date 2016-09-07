import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/index';
import App from './containers/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class Main extends Component {
	render() {
		return (
			<Provider store={createStoreWithMiddleware(reducers)}>
				<App />
			</Provider>
		);
	}
}