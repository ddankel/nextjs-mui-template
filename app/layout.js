import AppLayout from "@/layout/AppLayout";
import muiTheme from "@/styles/muiTheme";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

export const metadata = {
  title: "NextJS / MUI Template",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="darkly-dark">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <AppLayout>{children}</AppLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
