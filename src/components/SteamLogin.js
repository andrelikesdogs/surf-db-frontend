import React from "react";

import loginButton from "assets/img/sits_large_noborder.png";
import { styled } from "@mui/system";

const LoginImg = styled("img")``;

const SteamLogin = () => {
  return (
    <div>
      <LoginImg sx={{ marginBottom: -1 }} src={loginButton} />
    </div>
  );
};

export default SteamLogin;
