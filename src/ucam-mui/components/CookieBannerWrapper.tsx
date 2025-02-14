import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CamMuiTheme, CookieBanner } from "@ucam.uis.devops/ucam-observe-remote-analytics";

export default function CookieBannerWrapper() {
  return (
    <ThemeProvider theme={CamMuiTheme}>
      <CookieBanner />
    </ThemeProvider>
  );
}
