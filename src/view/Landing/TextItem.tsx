import React from 'react';

import { Box, Typography } from '@mui/material';

interface TextItemProps {
  bgcolor: string;
  title: string;
  description: string;
}

const TextItem: React.FC<TextItemProps> = ({ title, description, bgcolor }) => {
  return (
    <Box sx={{ borderRadius: '25px', border: '1px solid white', py: 2, px: '2px', bgcolor: bgcolor, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ p: 1 }}>
        <Typography sx={{
          fontWeight: 700,
          fontSize: { sm: '20px', md: '30px' },
          lineHeight: '100%',
          letterSpacing: 0,
          textAlign: 'center',
          color: '#FAFAFA',
        }} >{title}</Typography>
        <Typography
          sx={{
            mt: 1,
            fontWeight: 300,
            fontSize: { sm: '10px', md: '15px' },
            lineHeight: '100%',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#FAFAFA'
          }}
        >
          {description}
        </Typography>
      </Box>

    </Box >
  );

}

export default TextItem;

