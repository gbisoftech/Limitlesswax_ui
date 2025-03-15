import React from 'react';
import {
  ThemeProvider,
  createTheme,
  Container,
  Typography,
  Button,
  Grid,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Custom Theme to match the design
const theme = createTheme({
  palette: {
    primary: {
      main: '#800020', // Maroon color
    },
    secondary: {
      main: '#FFFFFF', // White color for contrast
    },
    background: {
      default: '#800020', // Maroon background
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#FFFFFF', // White
    },
    button: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'none', // Prevent uppercase transformation
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          padding: '6px 16px',   // Adjust padding for button size
        },
        outlined: {
          borderWidth: '1px', // Adjust border thickness
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: '#4A1E2A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: theme.spacing(4),
        }}
      >
        <Container maxWidth="md">
          {/* App Title */}
          <Typography variant="h1" align="left" gutterBottom>
            LimitlessWAX
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 15 }}>
            <Button variant="outlined" color="secondary" sx={{ border: '2px dotted #A6A6A6', borderRadius: 0 }} >
              Add Action
            </Button>
            <Typography variant="body1" sx={{ mt: 1, color: theme.palette.secondary.main }}>
              or
            </Typography>
            <Button variant="outlined" color="secondary" sx={{ borderRadius: 0, bgcolor: '#882140' }}>
              Load
            </Button>
          </Box>

          {/* Placeholder Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 15 }}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', bgcolor: '#882140', borderRadius: '15px', p: 2 }}>
              {[...Array(4)].map((_, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    border: '2px dotted #A6A6A6',
                    borderRadius: 0,
                    width: 65,
                    height: 75,
                    mx: 3,
                    my: 1
                  }}
                >
                  <AddIcon sx={{ fontSize: 40, color: 'white' }} />
                </Button>
              ))}
            </Box>
          </Box>

        </Container>
      </Box >
    </ThemeProvider >
  );
};

export default App;