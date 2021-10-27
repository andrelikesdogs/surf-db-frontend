import React from "react";
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";

import SteamLogin from "./SteamLogin";

import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";

const NavBar = () => {
  return (
    <AppBar position="sticky" enableColorOnDark={true}>
      <Box>
        <Toolbar>
          <Link variant="h6" color="inherit" sx={{ flexGrow: 1 }} href="/">
            <DeleteIcon fontSize="large" sx={{ marginBottom: -1 }} />
            Surf Garbage - MapDB and Server Stats
          </Link>
          {/*<SteamLogin />*/}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
