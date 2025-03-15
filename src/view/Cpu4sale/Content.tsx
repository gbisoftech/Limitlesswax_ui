import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Tabs,
  Tab
} from "@mui/material";

import Tab1 from './Tab1';
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
const Content: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#831F3F", // Background color matching the design
      }}
    >

      {/* Sidebar */}
      <Tabs
        orientation="vertical"
        value={tabValue}
        onChange={(event, newValue) => setTabValue(newValue)}
        sx={{
          '& .MuiTab-root': {
            color: '#fff',
            alignItems: 'flex-start',
            minHeight: 48,
            '&.Mui-selected': {
              color: '#fff',
              fontWeight: 'bold',
              bgcolor: '#391E24'
            }
          }
        }}
      >
        {["Request CPU for Self", "Stake to User", "Deposit and Earn", "Withdraw"].map(
          (item, index) => (
            <Tab
              key={index}
              label={item}
              sx={{
                textAlign: 'left',
                textTransform: 'none'
              }}
            />
          )
        )}
      </Tabs>

      {/* Main Content */}
      {tabValue == 0 && (
        <Tab1 />
      )}
      {tabValue == 1 && (
        <Tab2 />
      )}
      {tabValue == 2 && (
        <Tab3 />
      )}
      {tabValue == 3 && (
        <Tab4 />
      )}

    </Box>
  );
};

export default Content;