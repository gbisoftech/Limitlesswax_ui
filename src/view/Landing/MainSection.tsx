import React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery, AppBarProps, Theme, SxProps } from '@mui/material';
import { AppBar } from '@mui/material';

import TextItem from './TextItem';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', py: 4, ...sx }}>
      <Box width='80%' alignSelf='center'>
        <Typography align='center' variant={isSmallScreen ? "h5" : "h4"} gutterBottom>
          A new CPU renting system on the WAX blockchain
        </Typography>
        <Typography align='center' variant="body1" paragraph>
          Created with help from the WAX development team and community members.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'center', gap: 2, mt: 2 }}>
          <Button variant="contained" sx={{ color: 'white', bgcolor: '#8C243F', border: '1px solid white' }}>
            CPU4SALE
          </Button>
          <Button variant="contained" sx={{ color: 'white', bgcolor: '#8C243F', border: '1px solid white' }}>
            LIMITLESSWAX
          </Button>
        </Box>
      </Box>

      <Box sx={{ backgroundImage: "url('images/text_back.png')", backgroundSize: '130% 100%', backgroundPosition: 'center', transform: 'scaleX(-1)', p: 3, mt: 4, borderRadius: '50px' }}>
        <Box sx={{ width: '100%', height: '100%', transform: 'scaleX(-1)', display: 'flex' }}>
          <Box sx={{ width: '50%', p: 3 }}>
            <Typography
              sx={{

                fontWeight: 600,
                fontSize: { sm: 20, md: 36 },
                lineHeight: 1,
                letterSpacing: 0
              }}
              variant="h6"
              gutterBottom
            >
              Allowing anyone to rent CPU or deposit wax and earn from renting to others.
            </Typography>
            <Typography
              sx={{

                fontWeight: 300,
                fontSize: { sm: 16, md: 24 },
                lineHeight: 1,
                letterSpacing: 0
              }}
              variant="body2"
              paragraph
            >
              The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax.
            </Typography>
            <Typography
              sx={{

                fontWeight: 300,
                fontSize: { sm: 16, md: 24 },
                lineHeight: 1,
                letterSpacing: 0
              }}
              variant="body2"
              paragraph
            >
              Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. There is also a free system implemented but it has limits too.
            </Typography>
          </Box>
          <Box sx={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src='images/side1 1.png' alt='side1'
              style={{ width: '100%', display: 'block' }} />
          </Box>
        </Box >
      </Box >

      <Box sx={{ py: 1, px: 5 }}>
        <Typography sx={{ fontWeight: 200, fontSize: { sm: 12, md: 18 }, lineHeight: 1, letterSpacing: 0 }}>
          Public code: <span style={{ textDecoration: 'underline', textDecorationStyle: 'solid', textDecorationThickness: 0 }}>https://github.com/cpu4youu/cpu4youu.github.io</span>
        </Typography>
        <Box sx={{ width: '80%', margin: 'auto', mt: { sm: 2, md: 4 } }}>
          <Typography align='center' variant={isSmallScreen ? "h5" : "h4"}
            sx={{ color: 'white' }} gutterBottom>
            Users can interact with the smart contract in a number of ways
          </Typography>
        </Box>

        <Typography align='center' variant="body1" sx={{ color: 'white' }} paragraph>
          The system will be open for 1 week before allowing users to deposit their own wax to earn. If users find bugs there is a bug bounty program on discord.
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 1,
        mt: 4
      }}>
        <Box sx={{ width: { xs: '100%', sm: '50%' }, display: 'flex' }}>
          <TextItem bgcolor=' #331E22' title='Request CPU for Self' description="The system dynamically creates a price for the staked wax given the current supply, total loaned out, number of days, and amount user requests. Then that wax is sent to a minion account and staked to the user for the given time.
            The system dynamically creates a price for the staked wax given the current supply, total loaned out, number of days, and amount user requests. Then that wax is sent to a minion account and staked to the user for the given time."
          />
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '50%' }, display: "flex", gap: 1 }}>
          <Box sx={{ width: '50%', display: 'flex' }}>
            <TextItem bgcolor=' #331E22' title='Request Free CPU' description="As long as this account has wax it will send in a specified amount to the main contract requesting cpu as if it was a regular user." />
          </Box>
          <Box sx={{ width: '50%', display: 'flex' }}>
            <TextItem bgcolor=' #331E22' title='Deposit to Earn' description="Users can also deposit wax to earn 70% of the total fees collected." />
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 1,
        mt: 4,
        pt: 2,
      }}>
        <Box sx={{
          width: { xs: '100%', sm: '50%' },
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
        }}>
          <Box sx={{ width: '50%', display: 'flex' }}>
            <TextItem bgcolor=' #4A1E2A' title='Request CPU for Others' description="Similar to requesting to yourself, this does the first few steps but then directly stakes to the user specified. This can be sent from anyone for anyone else." />
          </Box>
          <Box sx={{ width: '50%', display: 'flex' }}>
            <TextItem bgcolor=' #4A1E2A' title='Update Collected Fees' description="This method is not required but will immediately update the table entry with how much wax the user has. This function will update the fees in the contract table and show you how much you could withdraw in total." />
          </Box>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '50%' }, display: 'flex' }}>
          <TextItem bgcolor=' #4A1E2A' title='Withdraw Deposited Wax' description="At any time a user can request to withdraw deposited wax. A user can make as many withdraw requests as they want up to the total wax they have deposited. If there is not enough liquid wax, as more gets unstaked it will be sent in order to users in line to withdraw." />
        </Box>
      </Box>

      <Box sx={{ mt: { sm: 5, md: 10 }, py: { sm: 5, md: 7 }, px: { sm: 2, md: 3 }, display: 'flex', justifyContent: 'space-around', borderRadius: '50px', bgcolor: "#331E22CC" }}>
        <Typography sx={{ color: '#EFEFEF', fontWeight: 700, fontSize: { sm: 24, md: 36 }, lineHeight: 1, letterSpacing: 0, textAlign: 'center' }}>Stay up to date with Limitless WAX</Typography>
        <Button variant="contained" sx={{ textTransform: 'none', color: 'white', bgcolor: '#8C243F', border: '1px solid white' }}>
          Join Community
        </Button>
      </Box>
    </Box >
  );
};

export default MainSection;