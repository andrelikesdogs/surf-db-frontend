import { createTheme } from "@mui/material/styles";

const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#482880",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#2f2f2f",
      paper: "#303030",
    },
  },
});

export default themeOptions;
