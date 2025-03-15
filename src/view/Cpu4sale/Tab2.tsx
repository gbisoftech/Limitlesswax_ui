import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Tab2 = () => {
  return (
    <Box sx={{ flex: 1, display: 'flex', bgcolor: '#4A1E2A', p: 2 }}>
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
                  borderRadius: 4,
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

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
            >
              Number of days:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TextField
                variant="outlined"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{
                  style: {
                    backgroundColor: "#831F3F",
                    borderRadius: 4,
                  },
                }}
              />
              <Typography
                sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
              >
                Days
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
            >
              Number of days:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TextField
                variant="outlined"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{
                  style: {
                    backgroundColor: "#831F3F",
                    borderRadius: 4,
                  },
                }}
              />

            </Box>
          </Box>
        </Box>

        {/* Amount to be Staked */}
        <Box>
          <Typography
            sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
          >
            Amount to be staked:
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              marginBottom: 2,
            }}
          >
            11.349123158 WAX
          </Typography>
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
            Stake to user
          </Button>
        </Box>
      </Box>

    </Box>
  )
}

export default Tab2;