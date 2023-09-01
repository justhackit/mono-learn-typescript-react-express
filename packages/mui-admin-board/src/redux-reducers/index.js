import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import UtilitiesReducer from './UtilitiesReducer';

export default combineReducers({
  //This is to hold the users authentication status & info
  userAuth: AuthReducer,
  //This is to hold the response after posting the cash transaction in Utilities > Cash Transaction
  postTransStatus: UtilitiesReducer,
});
