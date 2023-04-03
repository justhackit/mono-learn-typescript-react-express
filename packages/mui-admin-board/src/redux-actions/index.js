import { SIGN_OUT, SIGN_IN } from './types';

export const signIn = (user) => {
  const payload = {
    type: SIGN_IN,
    payload: {
      userId: user.tv.xY,
      firstName: user.tv.OZ,
      lastName: user.tv.eY,
      fullName: user.tv.yf,
      profilePic: user.tv.IO,
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
  return {
    type: SIGN_OUT,
  };
};
