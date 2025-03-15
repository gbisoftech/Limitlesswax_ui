// components/Dashboard.tsx
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import BalanceCard from './BalanceCard';
import Content from './Content';
const styles = {

}

const Account = () => {
  return (
    <Container maxWidth="md"> {/* Adjust maxWidth as needed */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, }}>
          <Box sx={{ width: '50%', }}>
            <BalanceCard title="517892.24469852" value="Total Wax in System" />
          </Box>
          <Box sx={{ width: '50%', }}>
            <BalanceCard title="517892.24469852" value="$1.Total Wax in System" />
          </Box>
        </Box>

        <Content />

      </Box>
    </Container>
  );
};

export default Account;