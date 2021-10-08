import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragonReducer from './dragons/dragons';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  dragons: dragonReducer,
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
