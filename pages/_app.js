import AppLayout from "@/layout/AppLayout";
import createEmotionCache from "@/styles/createEmotionCache";
import muiTheme from "@/styles/muiTheme";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline enableColorScheme />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
