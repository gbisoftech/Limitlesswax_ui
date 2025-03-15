// components/DataCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface DataCardProps {
  title: string;
  value: string;
  earnings?: string[];
  isStacked?: boolean;
}

const DataCard: React.FC<DataCardProps> = ({ title, value, earnings, isStacked }) => {
  return (

    <Box sx={{
      borderRadius: '50px', backgroundColor: '#4A1E2A', color: 'white',
      m: 1, p: 3,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
    }}>
      <Typography sx={{ color: '#EBEBEB', fontWeight: 400, fontSize: '32px', lineHeight: '100%', letterSpacing: '0%' }} variant="subtitle2" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography sx={{ color: '#EBEBEB', fontWeight: 500, fontSize: '64px', lineHeight: '100%', letterSpacing: '0%' }} variant="h6">{value}</Typography>
      {earnings && (
        <Box mt={2}>
          {earnings.map((earning, index) => (
            <Typography key={index} variant="body2" color="textSecondary">
              {earning}
            </Typography>
          ))}
        </Box>
      )}
      {isStacked && (
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            Request Free CPU
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DataCard;