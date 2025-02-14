import React from "react";

import { Theme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import defaultTheme from "./theme";

export const ThemeProvider = ({
  theme,
  children,
}: {
  theme?: Theme;
  children: React.ReactNode;
}) => <MuiThemeProvider theme={theme ?? defaultTheme}>{children}</MuiThemeProvider>;

export default ThemeProvider;
