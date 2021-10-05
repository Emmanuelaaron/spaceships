import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragonReducer from './dragons/dragons';

const reducer = combineReducers({
  dragons: dragonReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
