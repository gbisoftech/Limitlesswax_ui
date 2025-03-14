import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationItem {
  label: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'About Us', path: '/about' },
  { label: 'Account', path: '/account' },
  { label: 'Cpu4sale', path: '/cpu4sale' },
  { label: 'Limitlesswax', path: '/limitlesswax' },
  { label: 'Login', path: '/login' }
];

const Header: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 'none', py: 2 }}>
      <Toolbar style={{ justifyContent: "space-between" }} >
        <img src="images/side1 1.png" style={{ width: "100px " }} />
        {isMobile ? (
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
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
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;