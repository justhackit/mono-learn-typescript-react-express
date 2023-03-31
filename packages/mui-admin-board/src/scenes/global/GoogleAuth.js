import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../redux-actions';
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '986696403630-p0mfutqn767511rrtqb8teae9njm4d7v.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'streamy_blah_blah',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get());
    } else {
      this.props.signOut();
    }
  };

  onSignInClicked = () => {
    this.auth.signIn();
  };

  onSignOutClicked = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isUserSignedIn === null) {
      return null;
    } else if (this.props.isUserSignedIn) {
      return (
        <IconButton type="button" sx={{ p: 1 }} onClick={this.onSignOutClicked}>
          <LockOpenIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton type="button" sx={{ p: 1 }} onClick={this.onSignInClicked}>
          <LoginIcon />
        </IconButton>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isUserSignedIn: state.userAuth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);