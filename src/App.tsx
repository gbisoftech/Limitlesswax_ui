import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import MainSection from './components/MainSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundImage: "url('images/Rectangle.png')",backgroundSize:"100%", color: 'text.primary', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Header />
          <MainSection />
          <FAQSection />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;