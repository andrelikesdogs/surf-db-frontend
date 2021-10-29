import React from "react";

import loginButton from "assets/img/sits_large_noborder.png";
import { Box, styled } from "@mui/system";

import { Button, Link } from "@mui/material";
import { isLoggedIn } from "../hooks/userState";

const LoginImg = styled("img")`
  filter: drop-shadow(0px 0px 0px black);
  transition: 0.2s filter linear;

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 0px 2px white);
  }
`;

const SteamLogin = ({ ...props }) => {
  const loggedIn = isLoggedIn();

  return (
    <Box {...props}>
      {loggedIn ? (
        <Button variant="outlined" href="/auth/logout" color="inherit">
          Log Out
        </Button>
      ) : (
        <Link href="/auth">
          <LoginImg sx={{ marginBottom: -1 }} src={loginButton} />
        </Link>
      )}
    </Box>
  );
};

export default SteamLogin;
