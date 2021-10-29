import React from "react";
import { Button } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useHistory } from "react-router";
import SteamLogin from "./SteamLogin";

export const NavButton = styled(Button)({
  mr: 2,
});

const NavMenu = ({ ...props }) => {
  const history = useHistory();

  const handleSelectMaps = () => {
    history.push("/maps");
  };

  return (
    <Box {...props}>
      <Box sx={{ mx: 2, justifyContent: "flex-end", display: "flex" }}>
        <NavButton
          variant="text"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={handleSelectMaps}
        >
          Maps
        </NavButton>
        <SteamLogin sx={{ ml: 2 }} />
      </Box>
    </Box>
  );
};

export default NavMenu;
