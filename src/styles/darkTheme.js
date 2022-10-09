import { createTheme } from "@mui/material/styles";
import { baseThemeOptions } from "./baseTheme";
import { deepmerge } from "@mui/utils";

export const darkTheme = createTheme(
  deepmerge(baseThemeOptions, {
    palette: {
      mode: "dark",

      background: {
        default: "#202124",
        paper: "#252629",
      },
    },
  })
);
