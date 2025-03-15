import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Tab3 = () => {
  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', bgcolor: '#4A1E2A', p: 2 }}>
      <Box sx={{ flex: 1, display: 'flex' }}>
        <Box sx={{ p: 1 }}>
          <Typography
            sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
          >
            WAX Balance
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              marginBottom: 2,
            }}
          >
            11.3491 WAX
          </Typography>
        </Box>
        <Box sx={{ p: 1 }}>
          <Typography
            sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
          >
            WAX in System
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              marginBottom: 2,
            }}
          >
            11.3491 WAX
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Amount to Send */}
        <Box>
          <Typography
            sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
          >
            Amount to send:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              variant="outlined"
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: {
                  backgroundColor: "#831F3F",
                  border: 'none'
                },
              }}
            />
            <Typography
              sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
            >
              WAX
            </Typography>
          </Box>

        </Box>





        {/* Request Button */}
        <Box>
          <Button
            variant="contained"
            sx={{
              border: '1px solid white',
              backgroundColor: "#882140",
              "&:hover": { backgroundColor: "#b71c1c" },
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Deposit and Earn
          </Button>
        </Box>
      </Box>

    </Box>
  )
}

export default Tab3;