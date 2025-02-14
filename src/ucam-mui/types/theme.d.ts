import "@mui/material/AppBar";
import "@mui/material/Container";
import "@mui/material/InputLabel";
import "@mui/material/Link";
import "@mui/material/Paper";
import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    bodyFooter: CSSProperties;
    bodyLargeText: CSSProperties;
    bodyLargeBoldText: CSSProperties;
    body: CSSProperties;
    linkFooter: CSSProperties;
    linkFooterUnderline: CSSProperties;
  }

  interface TypographyVariantsOptions {
    bodyFooter?: CSSProperties;
    bodyLargeText?: CSSProperties;
    bodyLargeBoldText?: CSSProperties;
    body?: CSSProperties;
    linkFooter?: CSSProperties;
    linkFooterUnderline?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyFooter: true;
    bodyLargeText: true;
    bodyLargeBoldText: true;
    body: true;
    linkFooter: true;
    linkFooterUnderline: true;
  }
}

declare module "@mui/material/Link" {
  interface LinkPropsVariantOverrides {
    linkFooter: true;
    linkFooterUnderline: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    headerBox: true;
  }
}

declare module "@mui/material/Container" {
  interface ContainerPropsVariantOverrides {
    pageContainer: true;
  }
}

declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    outlinedPadded: true;
  }
}
