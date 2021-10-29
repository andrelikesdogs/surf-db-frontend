import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import ServerStatus from "../components/ServerStatus";
const Home = () => {
  return (
    <Grid justifyContent="space-around">
      <Grid item xs={12} textAlign="center">
        <DeleteIcon sx={{ fontSize: 120 }} />
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 4 }}>
          <Box textAlign="center">
            <Typography variant="h3">Welcome to garbage.surf</Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Grid item xs={12} md={4} lg={4} xl={2}>
            <Paper sx={{ py: 4, px: 4, mt: 2 }}>
              <Typography variant="h6">Server Status</Typography>
              <ServerStatus serverId={1} />
            </Paper>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
