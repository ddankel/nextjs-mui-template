import { CssBaseline, ThemeProvider } from "@mui/material";

import AppLayout from "@/layout/AppLayout";

import muiTheme from "@/styles/muiTheme";
import createEmotionCache from "@/styles/createEmotionCache";
import { CacheProvider } from "@emotion/react";

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
