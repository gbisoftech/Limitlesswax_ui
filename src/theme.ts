import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Assuming a dark theme
    primary: {
      main: '#A78BFA', // Example primary color
    },
    secondary: {
      main: '#F472B6', // Example secondary color
    },
    background: {
      default: '#331e22',
      paper: '#8C243F',
    },
    text: {
      primary: '#CBD5E1', // Light text color
      secondary: '#94A3B8', // Slightly darker text
    },
  },

});

export default theme;