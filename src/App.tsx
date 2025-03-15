import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import {
  LandingPage,
  AboutUsPage,
  ErrorPage,
  AccountPage,
  Cpu4SalePage,
  LimitlessWaxPage
} from './view';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ backgroundImage: "url('images/Rectangle.png')", backgroundSize: "100%", color: 'text.primary', minHeight: '100vh' }}>
          <Container maxWidth="lg">
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path='/AboutUs' element={<AboutUsPage />} />
              <Route path='/Error' element={<ErrorPage />} />
              <Route path='/Account' element={<AccountPage />} />
              <Route path='/Cpu4sale' element={<Cpu4SalePage />} />
              <Route path='/Limitlesswax' element={<LimitlessWaxPage />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;