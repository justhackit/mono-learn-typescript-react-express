import { Box, IconButton, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import GoogleAuth from '../login/GoogleAuth';
import { connect } from 'react-redux';
import backImg from '../../data/topbar_img.png';

const Topbar = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      {props.isUserSignedIn && (
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
          backgroundColor={colors.primary[400]}
          style={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: 'cover',
          }}
        >
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

          {/* ICONS */}
          <Box display="flex">
            {/* <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton> */}
            <IconButton>
              <GoogleAuth />
            </IconButton>
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
