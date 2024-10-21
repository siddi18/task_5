import React from 'react';
import { Container, Typography } from '@mui/material';
import LocalStorageCounter from './components/LocalStorageCounter.jsx';
import SessionStorageForm from './components/SessionStorageForm.jsx';

const App = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom style={{color:"green", fontWeight: "bold", paddingBottom:"50px"}}>
        Welcome to the BrainyBeam <span role="img" aria-label="hi">👋</span>
      </Typography>
      <LocalStorageCounter />
      <SessionStorageForm />
    </Container>
  );
};

export default App;
