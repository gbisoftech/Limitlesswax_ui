// components/BalanceCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface BalanceCardProps {
  title: string;
  value: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, value }) => {
  return (
    <Box sx={{ borderRadius: '25px', bgcolor: '#5C2736', color: 'white' }}>
      <Box sx={{ p: 2 }}>
        <Typography align='center' sx={{ fontWeight: 400, fontSize: '26px', lineHeight: '100%', letterSpacing: '0%' }} variant="subtitle2" color="" gutterBottom>
          {title}
        </Typography>
        <Typography align='center' sx={{ fontWeight: 500, fontSize: '26px', lineHeight: '100%', letterSpacing: '0%' }} variant="h6">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default BalanceCard;