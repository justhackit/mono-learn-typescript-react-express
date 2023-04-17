import { Box, Typography } from '@mui/material';

const Team = () => {
  const centered = {
    '.center': {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Box textAlign="center" sx={{ ...centered['.center'], border: 1 }}>
      <Typography variant="h3">Team</Typography>
    </Box>
  );
};

export default Team;
