import { CssBaseline, ThemeProvider } from "@mui/material";

import AppLayout from "@/layout/AppLayout";
import { theme } from "@/styles/baseTheme";

import "@/styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
