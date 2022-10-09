import { createTheme } from "@mui/material/styles";

export const baseThemeOptions = {
  palette: {
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

  props: {
    MuiAppBar: {
      color: "inherit",
    },

    MuiTooltip: {
      arrow: true,
    },
  },

  typography: {
    fontSize: 14,
    fontFamily: "Roboto",
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
};

export const baseTheme = createTheme(baseThemeOptions);
