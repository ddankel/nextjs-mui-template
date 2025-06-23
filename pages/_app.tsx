import { NextPage } from "next";
import { AppProps } from "next/app";

import AppLayout from "@/layout/AppLayout";
import { muiTheme } from "@/styles/muiTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement<any>) => React.ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function MyApp({ Component, pageProps, ...restProps }: AppPropsWithLayout) {
  return (
    <AppCacheProvider {...restProps}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline enableColorScheme />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
