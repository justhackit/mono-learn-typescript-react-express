import { SIGN_OUT, SIGN_IN, POST_TRANSACTION } from './types';
import omniAppService from '../apis/omniAppService';

export const signIn = (user) => {
  console.log('Signing in the user.. at ' + new Date().toLocaleString());
  if (user.tv === undefined && user.uv === undefined) {
    console.log('User creds object user: ' + JSON.stringify(user));
  }
  const payload = {
    type: SIGN_IN,
    payload: {
      userId: user.tv === undefined ? user.uv.GY : user.tv.xY,
      firstName: user.tv === undefined ? user.uv.XZ : user.tv.OZ,
      lastName: user.tv === undefined ? user.uv.nY : user.tv.eY,
      fullName: user.tv === undefined ? user.uv.zf : user.tv.yf,
      profilePic: user.tv === undefined ? user.uv.LO : user.tv.IO,
      token: {
        accesToken: user.zc.access_token,
        accessTokenExpiresAt: user.zc.expires_at,
        idToken: user.zc.id_token,
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
    const response = await omniAppService.post(
      '/cashtransaction',
      transactionPayload
    );
    console.log('response: ' + JSON.stringify(response.data));
    dispatch({ type: POST_TRANSACTION, payload: response.data.status });
  };
};
