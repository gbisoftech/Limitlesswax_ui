import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, Grid, Avatar, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define theme colors to match the image
const primaryColor = '#BE3144'; // Main Brand Color
const secondaryBackgroundColor = '#292323';
const footerBackgroundColor = '#1a1616';
const textColor = '#ffffff'; // Default Text Color


const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, color: textColor, fontFamily: 'Arial' }}>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 5, textAlign: 'center' }}>
        {/*  Rounded Box */}
        <Box sx={{ display: 'flex', backgroundImage: "url('images/text_back.png')", backgroundSize: '130% 100%', backgroundPosition: 'center', transform: 'scaleX(-1)', p: 3, mt: 4, borderRadius: '50px' }}>
          <Box sx={{ width: '100%', height: '100%', transform: 'scaleX(-1)', m: 1 }}>

            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Allowing anyone to rent cpu or deposit wax and earn from renting to others.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 'lighter' }}>
              The price is dynamically set between a 1% and 10% fee and it changes everytime someone
              deposits/withdraws/rents/returns wax.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontWeight: 'lighter' }}>
              Users are limited to how much they can rent in a single transaction but can make multiple requests as
              long as there is wax available. There is also a free system implemented but it has limits too.
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'lighter' }}>
              Users are limited to how much they can rent in a single transaction but can make multiple requests as
              long as there is wax available. There is also a free system implemented but it has limits too.
            </Typography>
          </Box>
        </Box>

        {/* Stay up to date */}
        <Box sx={{ mt: { sm: 5, md: 10 }, py: { sm: 5, md: 7 }, px: { sm: 2, md: 3 }, display: 'flex', justifyContent: 'space-around', borderRadius: '50px', bgcolor: "#331E22CC" }}>
          <Typography sx={{ color: '#EFEFEF', fontWeight: 700, fontSize: { sm: 24, md: 36 }, lineHeight: 1, letterSpacing: 0, textAlign: 'center' }}>Stay up to date with Limitless WAX</Typography>
          <Button variant="contained" sx={{ p: 2, textTransform: 'none', color: 'white', bgcolor: '#8C243F', fontWeight: 400, fontSize: 24, lineHeight: 1, letterSpacing: 0, textAlign: 'center' }}>
            Join Community
          </Button>
        </Box>
        {/* Team Section */}
        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <Box sx={{ width: { xs: 110, md: 300 }, maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: { xs: 100, md: 198 }, height: { xs: 100, md: 198 }, borderRadius: '50%', bgcolor: '#8C243F' }} />
            <Typography sx={{ fontWeight: 500, fontSize: 48, lineHeight: 1, letterSpacing: 0 }} variant="h6" gutterBottom >
              Vaaaan
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 24, lineHeight: 1, letterSpacing: 0, textAlign: 'center' }} variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue etiam auctor massa etiam.
            </Typography>
          </Box>
          <Box sx={{ width: { xs: 110, md: 300 }, maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: { xs: 100, md: 198 }, height: { xs: 100, md: 198 }, borderRadius: '50%', bgcolor: '#8C243F' }} />
            <Typography sx={{ fontWeight: 500, fontSize: 48, lineHeight: 1, letterSpacing: 0 }} variant="h6" gutterBottom>
              deraXyna
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 24, lineHeight: 1, letterSpacing: 0, textAlign: 'center' }} variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue etiam auctor massa etiam.
            </Typography>
          </Box>
        </Box>

        {/* Partners Section */}
        <Typography variant="h5" component="h3" sx={{ mt: 6, mb: 3, fontWeight: 'bold' }}>
          Partners
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item key={index}>
              <Box
                position='relative'
                sx={{
                  width: 96,
                  height: 72,
                  borderRadius: 1,
                  opacity: 0.5,
                }}
              >
                <img src="images/blank.png" alt='partner' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200%', height: '300%', filter: 'brightness(0) invert(1)' }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container >


    </Box >
  );
};

export default AboutUs;