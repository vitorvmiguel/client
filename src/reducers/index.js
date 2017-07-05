import { combineReducers } from 'redux';

import { dishesReducers } from './dishesReducers';
import { cartReducers } from './cartReducers';

export default combineReducers({
  dishes: dishesReducers,
  cart: cartReducers
})
