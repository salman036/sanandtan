import {combineReducers} from 'redux';

import * as authReducer from './auth';
import * as categoriesReducer from './categories';
import * as productsReducer from './products';
import * as cartReducer from './cart';
import * as manniqueReducer from './mannique';

export default combineReducers(
  Object.assign(
    authReducer,
    categoriesReducer,
    productsReducer,
    cartReducer,
    manniqueReducer,
  ),
);
