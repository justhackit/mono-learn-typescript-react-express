import {
  SIGN_OUT,
  SIGN_IN,
  POST_TRANSACTION,
  RESET_TRANSACTION,
} from './types';
import omniAppService from '../apis/omniAppService';

export const signIn = (user) => {
  var profile = user.getBasicProfile();
  var authResponse = user.getAuthResponse(true);
  console.log('Signing in the user.. at ' + new Date().toLocaleString());
  if (user.tv === undefined && user.uv === undefined) {
    console.log('User creds object user: ' + JSON.stringify(user));
  }
  const payload = {
    type: SIGN_IN,
    payload: {
      userId: profile.getId(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      fullName: profile.getName(),
      profilePic: profile.getImageUrl(),
      token: {
        accesToken: authResponse.access_token,
        accessTokenExpiresAt: authResponse.expires_at,
        idToken: authResponse.id_token,
      },
    },
  };
  return payload;
};

export const signOut = () => {
  console.log('Signing out the user....');
  return {
    type: SIGN_OUT,
  };
};

export const submitCashTransaction = (transactionPayload) => {
  return async function (dispatch, getState) {
    try {
      const response = await omniAppService.post(
        '/cashtransactions',
        transactionPayload
      );
      console.log('response: ' + JSON.stringify(response.data));
      dispatch({ type: POST_TRANSACTION, payload: response.data.status });
    } catch (err) {
      dispatch({ type: POST_TRANSACTION, payload: 'Error' });
    }
  };
};

export const resetPostTransactionState = () => {
  return {
    type: RESET_TRANSACTION,
    payload: '',
  };
};
