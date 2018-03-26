import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from "redux";  
import './styles/App.scss';
import App from './components/App';
import commentReducer from './reducers/commentReducer';
import replyReducer from './reducers/replyReducer';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const rootReducer = combineReducers({
	comments: commentReducer,
	replies: replyReducer
});

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
	console.log(store.getState());
	localStorage.setItem('state', JSON.stringify(store.getState()));
});


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);




