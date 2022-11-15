import { createTheme } from "@mui/material/styles";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
});

const muiTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#202124",
      paper: "#252629",
    },

    common: {
      gray: "#999",
    },

    primary: {
      main: "#00897b",
    },

    secondary: {
      main: "#ffd54f",
    },
  },

  typography: {
    fontSize: 14,
    fontFamily: roboto.style.fontFamily,
    h1: { fontSize: "2.25rem" },
    h2: { fontSize: "1.5rem" },
    h3: { fontSize: "1.25rem" },
    h4: { fontSize: "1.15rem" },
    h5: { fontSize: "1rem" },
    h6: { fontSize: "1rem" },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
    },

    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          "@media (min-width:600px)": {
            fontSize: 14,
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "filled",
        InputLabelProps: { shrink: true },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
      },
    },
  },
});

export default muiTheme;
