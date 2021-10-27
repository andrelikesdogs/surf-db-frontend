import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";

import Theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
