import { Box, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

const AWS_Creds = () => {
  const defaultCreds = JSON.stringify({
    accessKeyId: '',
    secretAccessKey: '',
    sessionToken: '',
    expiration: 1600000000,
  });

  const [creds, setCreds] = useState(defaultCreds);

  const [formattedCreds, setFormattedCreds] = useState();

  useEffect(() => {
    try {
      const ipJSON = JSON.parse(creds);
      const dateObject = new Date(ipJSON.expiration);
      setFormattedCreds(`[default]
aws_access_key_id=${ipJSON.accessKeyId}
aws_secret_access_key=${ipJSON.secretAccessKey}

aws_session_token=${ipJSON.sessionToken}
Expiration=${dateObject.toISOString()}        
        `);
    } catch (e) {
      console.log(e);
    }
  }, [creds]);

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        border: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Creds JSON"
        style={{ width: '80%' }}
        multiline
        defaultValue={creds}
        onChange={(e) => {
          setCreds(e.target.value);
        }}
      />
      <TextField
        label="Your ~.aws/credentails format"
        multiline
        style={{ width: '80%' }}
        defaultValue={formattedCreds}
      />
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={() => {
            const tmp = formattedCreds.split('\n').slice(0, 4);
            const clipboardStr = `${tmp[0]}
${tmp[1]}
${tmp[2]}
${tmp[3]}`;
            navigator.clipboard.writeText(clipboardStr);
          }}
        >
          Copy to Clipboard
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setFormattedCreds('');
          }}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default AWS_Creds;
