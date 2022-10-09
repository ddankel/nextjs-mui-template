import { createTheme } from "@mui/material/styles";
import { baseThemeOptions } from "./baseTheme";
import { deepmerge } from "@mui/utils";

export const lightTheme = createTheme(deepmerge(baseThemeOptions, {}));
