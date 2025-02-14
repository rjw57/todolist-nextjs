"use client";

import { styled } from "@mui/system";

export const Footer = styled("footer", {
  name: "UcamFooter",
  slot: "Root",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: 56,
  backgroundColor: theme.palette.background.paper,
}));

export default Footer;
