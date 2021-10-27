import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
const Home = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} textAlign="center">
        <DeleteIcon sx={{ fontSize: 120 }} />
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 4 }}>
          <Box textAlign="center">
            <Typography variant="h2">Welcome to garbage.surf</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
