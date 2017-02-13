const createLogger = require('redux-logger');
const thunk = require('redux-thunk');
const { createStore, combineReducers, applyMiddleware, compose } = require('redux');
const { results } = require('./results');

const root = combineReducers({
    results
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk.default));

module.exports = createStore(root, middleware);