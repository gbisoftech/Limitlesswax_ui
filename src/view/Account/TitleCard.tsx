// components/DataCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface DataCardProps {
  title: string;
}

const TitleCard: React.FC<DataCardProps> = ({ title }) => {
  return (
    <Box sx={{
      flex: 1, p: 1,
      borderRadius: '50px', backgroundColor: '#4A1E2A', color: 'white',
      display: 'flex', flexDirection: 'column', justifyContent: 'center'
    }}>
      <Typography align='center' sx={{ color: '#EBEBEB', fontWeight: 400, fontSize: { xs: 20, md: 32 }, lineHeight: '100%', letterSpacing: '0%' }} variant="subtitle2" color="textSecondary" gutterBottom>
        {title}
      </Typography>

    </Box >
  );
};

export default TitleCard;