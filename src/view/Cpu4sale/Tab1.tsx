import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Tab1 = () => {
  return (
    <Box sx={{ flex: 1, display: 'flex', bgcolor: '#4A1E2A', p: 2 }}>
      <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Amount to Send */}
        <Box>
          <Typography
            sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
          >
            Amount to send:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              fullWidth
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

        {/* Number of Days */}
        <Box sx={{}}>
          <Typography
            sx={{ color: "#fff", fontSize: "0.9rem", marginBottom: 1 }}
          >
            Number of days:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              fullWidth
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
            fullWidth
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
            Request self stake
          </Button>
        </Box>
      </Box>

      {/* ROI Section */}
      <Box
        sx={{
          marginTop: 3,
          paddingY: 2,
          paddingX: 3,
          backgroundColor: "#831F3F",
          borderRadius: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          align='center'
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "100%",
            letterSpacing: "0%",
            marginBottom: 1
          }}
        >
          ROI
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {["Daily", "Weekly", "Monthly"].map((period, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ color: "#fff" }}>
                {period}
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: "24px" }}>
                11.349 WAX
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Tab1;