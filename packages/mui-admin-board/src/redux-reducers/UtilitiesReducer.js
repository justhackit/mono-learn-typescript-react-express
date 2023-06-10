import { POST_TRANSACTION } from '../redux-actions/types';

const INITIAL_STATE = {
  status: null,
};

export default function (postTransState = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_TRANSACTION:
      return { ...postTransState, status: action.payload };
    default:
      return postTransState;
  }
}
