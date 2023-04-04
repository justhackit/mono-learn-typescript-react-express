import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux-actions';

const AuthProtectedRoute = (props) => {
  let location = useLocation();
  if (props.isUserSignedIn) {
    if (props.tokenExpiresAt < Date.now()) {
      console.log('Token expired. Triggered signOut');
      props.signOut();
    }
  }
  if (!props.isUserSignedIn) {
    console.log('User not logged in . Redirecting to /login');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
};

const mapStateToProps = (state) => {
  return {
    isUserSignedIn: state.userAuth.isSignedIn,
    tokenExpiresAt:
      state.userAuth.authInfo != null
        ? state.userAuth.authInfo.token.accessTokenExpiresAt
        : null,
  };
};
export default connect(mapStateToProps, { signOut })(AuthProtectedRoute);
