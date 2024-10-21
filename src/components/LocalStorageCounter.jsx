import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

const LocalStorageCounter = () => {
  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem('counter');
    return savedCounter ? parseInt(savedCounter, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <Box 
      sx={{ padding: 3, border: '1px solid green', borderRadius: 2, marginBottom: 3, textAlign: 'center',    transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)', 
        } }}>
      <Typography variant="h5" gutterBottom style={{fontWeight:"bold"}}>Local Storage Counter</Typography>
      <Typography variant="body1" sx={{ marginBottom: 2, fontSize: 25 }}>Counter: {counter}</Typography>
      <Button variant="contained" color="primary" onClick={incrementCounter} sx={{ marginRight: 1 }}>
        Increment Counter
      </Button>
      <Button variant="contained" color="error" onClick={resetCounter}>
        Reset Counter
      </Button>
    </Box>
  );
};

export default LocalStorageCounter;