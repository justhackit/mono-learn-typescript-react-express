import { Box, Typography, useTheme } from '@mui/material';
import GoogleAuth from './GoogleAuth';
import { tokens } from '../../theme';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginPage = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {props.isUserSignedIn ? (
        <Navigate to="/cashtransaction" replace />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{ border: 1 }}
        >
          <Typography variant="h3" color={colors.grey[100]}>
            <GoogleAuth />
          </Typography>
        </Box>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { isUserSignedIn: state.userAuth.isSignedIn };
};
export default connect(mapStateToProps, {})(LoginPage);
