// components/ActionButton.tsx
import React from 'react';
import { Button, Typography } from '@mui/material';

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        color: '#EBEBEB',
        bgcolor: '#5C2736',
        borderRadius: 50,
        p: 5,
      }}
    >
      <Typography sx={{
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: 'center',
        textTransform: 'none'
      }}>
        {label}
      </Typography>
      <span>&#62;</span>
    </Button>
  );
};

export default ActionButton;