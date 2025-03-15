import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, Grid, Avatar, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define theme colors to match the image
const primaryColor = '#BE3144'; // Main Brand Color
const secondaryBackgroundColor = '#292323';
const footerBackgroundColor = '#1a1616';
const textColor = '#ffffff'; // Default Text Color


const Error = () => {
  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };
  return (

    <Container maxWidth="md" sx={{ mt: 5, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', mb: { xs: 4, md: 10 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src='images/side1 1.png' alt='side1'
            style={{ width: '100%', display: 'block' }} />
        </Box>
        <Typography variant="h5" component="h3" sx={{ color: 'white', fontWeight: 700, fontSize: { xs: 20, sm: 32, md: 48 }, lineHeight: 1, letterSpacing: 0, textAlign: 'center' }}>
          Please log in to to see this feature in LimitlessWAX.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant='outlined'
            key={'/login'}
            color="inherit"
            onClick={() => handleNavigation('/login')}
          >
            {'Login'}
          </Button>
        </Box>

      </Box>
    </Container >


  );
};

export default Error;