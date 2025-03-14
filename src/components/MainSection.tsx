import React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery, AppBarProps, Theme, SxProps } from '@mui/material';
import { AppBar } from '@mui/material';

type CustomAppBarProps = AppBarProps & {
  customBgColor?: string;
  customShadow?: string;
  customPadding?: number;
};

interface MainSectionProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const defaultAppBarStyles: SxProps<Theme> = {
  bgcolor: 'transparent',
  boxShadow: 'none',
  py: 2,
};

const MainSection: React.FC<MainSectionProps> = ({ className, sx }) => {
  const isSmallScreen: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const appBarProps: CustomAppBarProps = {
    position: "static",
    component: "nav",
    elevation: 0,
  };

  return (
    <Box sx={{ py: 4, ...sx }}>
      <Typography align='center' variant={isSmallScreen ? "h5" : "h4"} gutterBottom>
        A new CPU renting system on the WAX blockchain
      </Typography>
      <Typography align='center' variant="body1" paragraph>
        Created with help from the WAX development team and community members.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'center', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary">
          CPU4SALE
        </Button>
        <Button variant="contained" color="secondary">
          LIMITLESSWAX
        </Button>
      </Box>

      <Box sx={{ bgcolor: 'background.paper', p: 3, mt: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Allowing anyone to rent CPU or deposit wax and earn from renting to others.
        </Typography>
        <Typography variant="body2" paragraph>
          {/* Add the paragraph content here (from OCR or your own text) */}
          The price is dynamically set. Users are limited... etc.
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 0.5,
        mt: 4
      }}>
        <Box sx={{
          flex: 1,
          border: '1px solid white',
          borderRadius: 5,
          p: 2,
          bgcolor: 'action.hover'
        }}>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Request CPU for Self
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            The system dynamically creates a price for the staked wax given the current supply, total loaned out, number of days, and amount user requests. Then that wax is sent to a minion account and staked to the user for the given time.
          </Typography>
        </Box>

        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row' },
          gap: 0.5,
        }}>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid white',
            borderRadius: 5,
            p: 2,
            bgcolor: 'action.hover'
          }}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Request Free CPU
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              As long as this account has wax it will send in a specified amount to the main contract requesting cpu as if it was a regular user.</Typography>
          </Box>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',

            border: '1px solid white',
            borderRadius: 5,
            p: 2,
            bgcolor: 'action.hover'
          }}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Deposit to Earn
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Users can also deposit wax to earn 70% of the total fees collected.            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 0.5,
        mt: 4
      }}>
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          gap: 0.5,
        }}>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',

            border: '1px solid white',
            borderRadius: 5,
            p: 2,
            bgcolor: 'action.hover'
          }}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Request CPU for Others
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Similar to requesting to yourself, this does the first few steps but then directly stakes to the user specified. This can be sent from anyone for anyone else.            </Typography>
          </Box>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',

            border: '1px solid white',
            borderRadius: 5,
            p: 2,
            bgcolor: 'action.hover'
          }}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Update Collected Fees
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              This method is not required but will immediately update the table entry with how much wax the user has. This function will update the fees in the contract table and show you how much you could withdraw in total.            </Typography>
          </Box>
        </Box>

        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',

          border: '1px solid white',
          borderRadius: 5,
          p: 2,
          bgcolor: 'action.hover'
        }}>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Withdraw Deposited Wax
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            At any time a user can request to withdraw deposited wax. A user can make as many withdraw requests as they want up to the total wax they have deposited. If there is not enough liquid wax, as more gets unstaked it will be sent in order to users in line to withdraw.          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body1">Stay up to date with Limitless WAX</Typography>
        <Button variant="contained" color="primary">
          Join Community
        </Button>
      </Box>
    </Box >
  );
};

export default MainSection;