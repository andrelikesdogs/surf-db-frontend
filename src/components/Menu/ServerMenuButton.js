import { KeyboardArrowDown } from "@mui/icons-material";
import React from "react";
import { NavButton } from "../NavMenu";

const ServerMenuButton = () => {
  return (
    <NavButton
      variant="text"
      endIcon={<KeyboardArrowDown />}
      color="inherit"
      onClick={handleClick}
      sx={{ mr: 2 }}
    >
      Servers
    </NavButton>
  );
};

export default ServerMenuButton;
