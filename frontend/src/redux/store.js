import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { productReducer } from './reducers/productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
