import { ComponentProps, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider } from "../styles";
import GoogleAnalytics from "../components/GoogleAnalytics";

interface DefaultLayoutProps {
  googleAnalyticsId?: string;
  themeProviderProps?: ComponentProps<typeof ThemeProvider>;
  children?: ReactNode;
}

export default function DefaultLayout({
  googleAnalyticsId,
  themeProviderProps,
  children,
}: DefaultLayoutProps) {
  return (
    <html lang="en">
      <GoogleAnalytics googleAnalyticsId={googleAnalyticsId}></GoogleAnalytics>
      <body>
        <CssBaseline />
        <ThemeProvider {...themeProviderProps}>
          <Box sx={{ flexGrow: 1 }}>
            <Header />
            <main>{children}</main>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
