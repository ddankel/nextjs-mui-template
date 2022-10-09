import { CssBaseline, ThemeProvider } from "@mui/material";

import AppLayout from "@/layout/AppLayout";

import "@/styles/fonts.css";
import useTheme from "@/hooks/useTheme";

function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();

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
