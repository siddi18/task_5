import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const SessionStorageForm = () => {
  const [email, setEmail] = useState(() => sessionStorage.getItem('email') || '');
  const [password, setPassword] = useState(() => sessionStorage.getItem('password') || '');

  useEffect(() => {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
  }, [email, password]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('password');
    };
  }, []);

  return (
    <Box
      sx={{
        padding: 3, border: '1px solid green', borderRadius: 2, textAlign: 'center', transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}>
      <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>Session Storage Form</Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={() => sessionStorage.clear()}>
        Clear Session Storage
      </Button>
    </Box>
  );
};

export default SessionStorageForm;