// components/DataCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';


interface EarningItem {
  date: string;
  price: number;
}


const earningItems: readonly EarningItem[] = [
  {
    date: "Total Free CPU",
    price: 6.12354
  },
  {
    date: "Total Free CPU",
    price: 6.12354
  }, {
    date: "Total Free CPU",
    price: 6.12354
  }, {
    date: "Total Free CPU",
    price: 6.12354
  },
] as const;

const PriceCard = () => {
  return (

    <Box sx={{
      borderRadius: '50px', backgroundColor: '#831F3F', color: 'white',
      m: 1, p: 3,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
    }}>

      {earningItems && (
        <Box mt={2}>
          {earningItems.map((earning, index) => (
            <>
              <Typography key={index} variant="body2" color="textSecondary">
                {earning.date}
              </Typography>
              <Typography key={index} variant="body2" color="textSecondary">
                {earning.price}
              </Typography>
            </>
          ))}
        </Box>
      )}

    </Box>
  );
};

export default PriceCard;