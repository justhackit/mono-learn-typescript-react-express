import { Box, IconButton, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import GoogleAuth from '../login/GoogleAuth';
import { connect } from 'react-redux';
import { Typography } from '@mui/material';

const Topbar = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      {props.isUserSignedIn && (
        <Box
          display="flex"
          justifyContent="space-between"
          p={2}
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
          >
            <Typography variant="h1" color={colors.grey[100]}>
              The Root App
            </Typography>
          </Box>

          {/* SEARCH BAR */}
          {/* <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            sx={{ border: 1 }}
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box> */}

          {/* ICONS  */}
          <Box display="flex">
            {/* <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton> */}
            <GoogleAuth />
          </Box>
        </Box>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isUserSignedIn: state.userAuth.isSignedIn };
};
export default connect(mapStateToProps, {})(Topbar);
