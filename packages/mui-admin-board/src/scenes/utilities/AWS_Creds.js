import { Box, Typography } from '@mui/material';

const AWS_Creds = () => {
  const centered = {
    '.center': {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    //return a div centered at the sceen
    <Box textAlign="center" sx={{ ...centered['.center'], border: 1 }}>
      <Typography variant="h3">AWS Credentials</Typography>
    </Box>
  );
};

export default AWS_Creds;
