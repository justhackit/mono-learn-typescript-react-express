import { SIGN_IN, SIGN_OUT } from '../redux-actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  authInfo: null,
};

export default (userAuth = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...userAuth, isSignedIn: true, authInfo: action.payload };
    case SIGN_OUT:
      return { ...userAuth, isSignedIn: false, authInfo: null };
    default:
      return userAuth;
  }
};
