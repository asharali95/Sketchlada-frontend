import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './rootReducer';

var middlewares = [thunk]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares),
  // other store enhancers if any
));

export default store;
