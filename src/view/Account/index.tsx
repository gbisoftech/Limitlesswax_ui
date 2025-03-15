// components/Dashboard.tsx
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import BalanceCard from './BalanceCard';
import DataCard from './DataCard';
import TitleCard from './TitleCard';
import PriceCard from './PriceCard';
import ActionButton from './ActionButton';

const styles = {

}

const Account = () => {
  return (
    <Container maxWidth="md"> {/* Adjust maxWidth as needed */}
      <Box sx={{ py: 3 }}> {/* Add some vertical padding */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>


          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, }}>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: 172, height: 172, borderRadius: '50%' }}>

              </Box>
              <Typography variant="h5" component="h1" gutterBottom>
                ki.fg.wam
              </Typography>
            </Box>
            <Box sx={{ width: '195px', }}>
              <BalanceCard title="Total WAX Balance:" value="6.12354672" />
            </Box>
            <Box sx={{ width: '195px', }}>
              <BalanceCard title="Total USD Balance:" value="$1.9321245" />
            </Box>
          </Box>

          <Box>
            <Typography variant="h6">Dashboard</Typography>
          </Box>

          {/* Data Cards */}
          <Box sx={{ display: 'flex', gap: 2, }}>
            <Box sx={{ flex: '1 1 60%', display: 'flex', flexWrap: 'wrap' }}>
              <Box sx={{
                width: '50%',
              }}>
                <DataCard title="Requested CPU for self total:" value="6.12354" />
              </Box>
              <Box sx={{ width: '50%', display: 'flex' }} >
                <Box sx={{
                  m: 1,
                  display: 'flex', flexDirection: 'column', gap: 1
                }}>
                  <TitleCard title="Update Collected Fees" />
                  <TitleCard title='Request Free CPU' />
                </Box>
              </Box>

              <Box sx={{
                width: '50%'
              }}>

                <DataCard title="Requested CPU for other total:" value="6.12354" />
              </Box>
              <Box sx={{
                width: '50%'
              }}>

                <DataCard title="Deposited WAX to earn:" value="6.12354" />
              </Box>
            </Box>
            <Box sx={{ flex: '1 1 calc(33.33% - 24px)', minWidth: '250px', display: 'flex' }}>
              <PriceCard />
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ flex: '1 1 calc(50% - 12px)' }}>
              <ActionButton label="Go to Cpu4Sale" />
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 12px)' }}>
              <ActionButton label="Go to LimitlessWAX" />
            </Box>
          </Box>

        </Box>
      </Box>
    </Container>
  );
};

export default Account;