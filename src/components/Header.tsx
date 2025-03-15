import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationItem {
  label: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'About Us', path: '/aboutus' },
  { label: 'Account', path: '/account' },
  { label: 'Cpu4sale', path: '/cpu4sale' },
  { label: 'Limitlesswax', path: '/limitlesswax' },
];

const Header: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };

  return (
    <Box position="static" sx={{
      boxShadow: 'none',
      py: 2,
      bgcolor: 'transparent' // dark background color
    }}>
      <Toolbar style={{ justifyContent: "space-between" }} >
        <img src="images/side1 1.png" style={{ width: "100px " }} />
        {isMobile ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Button
              variant='outlined'
              key={'/login'}
              color="inherit"
              onClick={() => handleNavigation('/login')}
            >
              {'Login'}
            </Button>
          </Box>

        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navigationItems.map((item: NavigationItem) => (
              <Button
                key={item.path}
                color="inherit"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant='outlined'
              key={'/login'}
              color="inherit"
              onClick={() => handleNavigation('/login')}
            >
              {'Login'}
            </Button>
          </Box>
        )}
      </Toolbar>
    </Box>
  );
};

export default Header;