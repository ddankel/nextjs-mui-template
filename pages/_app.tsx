import { NextPage } from "next";
import { AppProps } from "next/app";

import AppLayout from "@/layout/AppLayout";
import { muiTheme } from "@/styles/muiTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppCacheProvider, createEmotionCache } from "@mui/material-nextjs/v16-pagesRouter";
import { EmotionCache } from "@emotion/react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement<any>) => React.ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

const clientEmotionCache = createEmotionCache({ key: "css", enableCssLayer: true });

export default function MyApp({
  Component,
  pageProps,
  emotionCache = clientEmotionCache,
}: AppPropsWithLayout) {
  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline enableColorScheme />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
