import { createTheme } from "@mui/material/styles";

import { lightBlue, purple, red, green } from "@mui/material/colors";

const GREEN = green[800];
const RED = red[800];

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: purple[200],
    },
    common: {
      GREEN,
      RED,
    },
  },
});

export default theme;
