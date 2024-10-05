import AppLayout from "@/layout/AppLayout";
import muiTheme from "@/styles/muiTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";

export default function MyApp({ Component, pageProps, ...restProps }) {
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
