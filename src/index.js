import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/AppContainer/App'
import rootReducer from './reducers/reducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const Store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

render(<Provider store={Store}><App /></Provider>, document.getElementById("root"));
