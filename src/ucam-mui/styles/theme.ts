"use client";

import React from "react";
import { createTheme } from "@mui/material/styles";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";
import { Bitter, Open_Sans } from "next/font/google";

import { RadioCheckedIcon, RadioIcon } from "../components/RadioIcon";

import {
  fontFamilies,
  fontSizes,
  fontWeights,
  radii,
  spacing,
  typeStyles,
} from "@ucam/helix-tokens";
import colours from "./colours";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const bitter = Bitter({
  subsets: ["latin"],
});

const replacements = {
  Bitter: bitter.style.fontFamily,
  "Open Sans": openSans.style.fontFamily,
};

const stripFontSizeFromStyles = (styles: TypographyStyleOptions) => ({
  ...styles,
  fontSize: "1rem",
});

const replaceFontFamily = (fontFamily: TypographyStyleOptions["fontFamily"]) =>
  fontFamily
    ? Object.entries(replacements).reduce(
      (accumulator, [search, replace]) => accumulator.replace(search, replace),
      fontFamily,
    )
    : fontFamily;

const parseTypeStyle = ({ fontFamily, ...rest }: TypographyStyleOptions) => ({
  fontFamily: replaceFontFamily(fontFamily),
  ...rest,
});

const body: { [level: number]: TypographyStyleOptions } = {
  1: {
    ...parseTypeStyle(typeStyles.paragraph.paragraph2),
    color: colours.black,
    marginBottom: spacing["16px"],
  },
  2: {
    ...parseTypeStyle(typeStyles.paragraph.paragraph3),
    color: colours.grey11,
    marginBottom: spacing["12px"],
  },
};

const heading: { [level: number]: TypographyStyleOptions } = {
  1: {
    ...parseTypeStyle(typeStyles.headings.heading1),
    marginBottom: spacing["40px"],
    "& .MuiSvgIcon-root": {
      verticalAlign: "text-top",
      marginRight: spacing["8px"],
    },
  },
  2: {
    ...parseTypeStyle(typeStyles.headings.heading2),
    marginBottom: spacing["20px"],
  },
  3: {
    ...parseTypeStyle(typeStyles.headings.heading3),
    paddingBottom: spacing["4px"],
    marginBottom: spacing["64px"],
    borderBottom: `1px solid ${colours.grey3}`,
  },
  4: {
    ...parseTypeStyle(typeStyles.headings.heading4),
    // Override Helix theme
    // Reason: https://gitlab.developers.cam.ac.uk/uis/devops/digital-admissions/admissions-portal/ap-frontend/-/issues/697#note_430430
    fontWeight: fontWeights.medium,
    marginBottom: spacing["16px"],
    marginTop: spacing["40px"],
    // Stop two `h4`s following each other having a gap between
    "& + .MuiTypography-h4": {
      marginTop: 0,
    },
  },
  5: parseTypeStyle(typeStyles.headings.heading5),
  6: parseTypeStyle(typeStyles.headings.heading6),
};

const label: TypographyStyleOptions = {
  ...heading[4],
  transform: "none",
  marginBottom: "12px",
  position: "inherit",
  whiteSpace: "normal",
  maxWidth: "100%",
  width: "100%",
};

const brand = {
  contrastText: colours.cambridgeBlue2,
  light: colours.cambridgeBlue3,
  main: colours.cambridgeBlue7,
  dark: colours.cambridgeBlue9,
};

const errorPalette = {
  light: colours.cherry5,
  main: colours.cherry8,
  dark: colours.cherry9,
  contrastText: colours.cherry1,
  border: colours.cherry7,
};

const successPalette = {
  light: colours.green5,
  main: colours.green9,
  dark: colours.cambridgeBlue8,
  contrastText: colours.green1,
  border: colours.green7,
};

const warningPalette = {
  light: colours.crest4,
  main: colours.crest8,
  dark: colours.crest9,
  contrastText: colours.crest1,
  border: colours.crest7,
};

const infoPalette = {
  light: colours.indigo4,
  main: colours.indigo8,
  dark: colours.indigo9,
  contrastText: colours.white,
  border: colours.indigo6,
};

const list: TypographyStyleOptions = {
  marginTop: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: spacing["24px"],
  marginBottom: spacing["32px"],
};

const listItem: TypographyStyleOptions = {
  marginBottom: spacing["4px"],
  color: "inherit",
  display: "list-item",
  padding: `0 0 0 ${spacing["4px"]}`,
};

const link: TypographyStyleOptions = {
  color: colours.cambridgeBlue8,
  fontFamily: fontFamilies.sans,
  textDecoration: "underline",
  overflowWrap: "break-word",
  "&:hover": {
    color: colours.cambridgeBlue9,
  },
  "&:active": {
    color: colours.cambridgeBlue10,
  },
  "& .cam-logo": {
    color: colours.black,
  },
};

const theme = createTheme({
  palette: {
    primary: brand,
    secondary: {
      light: colours.grey1,
      main: colours.grey2,
      dark: colours.grey3,
    },
    success: successPalette,
    error: errorPalette,
    info: infoPalette,
    warning: warningPalette,
    grey: {
      100: colours.grey1,
      200: colours.grey2,
      300: colours.grey3,
      400: colours.grey4,
      500: colours.grey6,
      600: colours.grey8,
      700: colours.grey9,
      800: colours.grey10,
      900: colours.grey11,
    },
    background: {
      default: colours.white,
    },
  },
  typography: {
    // Including font sizes here has impacts on wider app since it uses `em`, which stack as they're nested
    body1: {
      ...stripFontSizeFromStyles(body[1]),
      // This gets applied to the `body`
      // So reset the font size and remove the margin
      fontSize: "1rem",
      marginBottom: 0,
    },
    // We set these here so we can refer to them throughout the code in our theme
    body2: body[2],
    subtitle1: {
      ...body[2],
      fontSize: fontSizes["14px"],
    },
    fontFamily: replaceFontFamily(fontFamilies.sans),
    fontWeightLight: fontWeights.light,
    fontWeightRegular: fontWeights.regular,
    fontWeightMedium: fontWeights.semibold,
    fontWeightBold: fontWeights.bold,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: openSans.style.fontFamily,
          margin: 0,
        },
      },
    },
    MuiAppBar: {
      variants: [
        {
          props: { variant: "headerBox" },
          style: {
            textAlign: "center",
            backgroundColor: "#FEFFFE",
            height: "88px",
            display: "flex",
            justifyContent: "left",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            position: "relative",
            width: "100%",
            zIndex: 1,
          },
        },
      ],
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "left",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          marginLeft: "16px",
          marginTop: "14px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: heading[1],
        h3: heading[3],
        h4: heading[4],
        gutterBottom: {
          marginBottom: 24,
        },
        root: {
          variants: [
            {
              props: { variant: "bodyFooter" },
              style: {
                fontSize: "16px",
                fontWeight: 400,
                fontFamily: openSans.style.fontFamily,
                lineHeight: "24px",
                color: "#FFFFFF",
              },
            },
            {
              props: { variant: "bodyLargeText" },
              style: {
                fontFamily: openSans.style.fontFamily,
                fontSize: "16px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "24px",
                color: "#232832",
              },
            },
            {
              props: { variant: "bodyLargeBoldText" },
              style: {
                fontFamily: openSans.style.fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                color: "#232832",
              },
            },
            {
              props: { variant: "body" },
              style: {
                display: "block",
                fontFamily: openSans.style.fontFamily,
                fontSize: "12px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "24px",
                color: "#FFFFFF",
              },
            },
          ],
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          minWidth: spacing["40px"],
          "&.Mui-disabled": {
            borderColor: colours.grey4,
          },
          "&:hover": {
            boxShadow: "none",
          },
          "&.Mui-focusVisible": {
            boxShadow: `0 0 0 2px ${colours.white}, 0 0 0 7px ${colours.indigo6}`,
          },
        },
        contained: {
          textTransform: "none",
          fontWeight: fontWeights.medium,
          boxShadow: "none",
          padding: `${spacing["8px"]} ${spacing["16px"]}`,
          fontSize: fontSizes["18px"],
        },
        sizeSmall: {
          padding: `${spacing["4px"]} ${spacing["12px"]}`,
          fontSize: fontSizes["16px"],
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
        containedPrimary: {
          color: colours.white,
          fontWeight: fontWeights.semibold,
        },
        outlinedPrimary: {
          borderColor: brand.main,
        },
        outlinedSecondary: {
          borderColor: colours.grey3,
        },
        text: {
          fontFamily: replaceFontFamily(fontFamilies.sans),
          fontWeight: fontWeights.semibold,
          textTransform: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          style: {
            color: "#0D646A",
          },
          variants: [
            {
              props: { variant: "linkFooterUnderline" },
              style: {
                color: "#8EE8D8",
                display: "block",
                textDecoration: "underline #8EE8D8",
                fontSize: "16px",
              },
            },
            {
              props: { variant: "linkFooter" },
              style: {
                color: "#8EE8D8",
                display: "block",
                textDecoration: "none",
              },
            },
          ],
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&.MuiList-unordered": {
            ...list,
            listStyle: "disc",
            "& > li": listItem,
          },
          "&.MuiList-ordered": {
            ...list,
            listStyle: "decimal",
            "& > li": listItem,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: spacing["4px"],
          paddingBottom: spacing["4px"],
          "&.MuiListItem-link": {
            ...link,
          },
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#343B48",
          minHeight: "192px",
          padding: "0",
          "@media (max-width: 1150px)": {
            height: "384px",
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          width: "100%",
          padding: "48px 48px",
          fontSize: "16px",
          alignItems: "flex-start",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (max-width: 1150px)": {
            margin: "0 16px",
          },
          "@media (min-width: 1151px)": {
            margin: "0 224px",
          },
          padding: "32px",
          paddingTop: "64px",
          paddingBottom: "96px",
          maxWidth: "882px",
          minHeight: "60vh",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          backgroundColor: "#FFFF",
          background: "#FFFFFF",
          padding: "32px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        // Input labels and fieldset legends
        root: label,
      },
    },
    MuiInputLabel: {
      defaultProps: {
        disableAnimation: true,
        focused: false,
        shrink: true,
      },
      styleOverrides: {
        root: {
          // Just input labels
          // Reapply label styles to override MUI specificity
          ...label,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          padding: `${spacing["12px"]} ${spacing["8px"]}`,
        },
        root: {
          marginBottom: 0,
          border: `1px solid ${colours.grey10}`,
          transition:
            "border-color 0.1s linear, border-width 0.1s linear, margin-top 0.1s linear, margin-bottom 0.1s linear",
          width: "100%",
          borderRadius: radii["4px"],
          "& input": {
            lineHeight: 1.5,
            height: "1.5em",
            padding: 0,
          },
          "&.Mui-disabled": {
            borderColor: colours.grey3,
          },
          "&.Mui-focused": {
            boxShadow: `0 0 0 3px ${colours.white}, 0 0 0 7px ${colours.indigo6}`,
            borderRadius: "4px",
          },
          "&.Mui-error": {
            borderColor: errorPalette.main,
            borderWidth: radii["4px"],
            marginTop: "-1px",
            marginBottom: 0,
            "&.Mui-focused": {
              boxShadow: `0 0 0 2px ${colours.white}, 0 0 0 7px ${colours.indigo6}`,
              borderRadius: "4px",
            },
          },
          // Handle the pushing down by the border width increasing.
          "&:not(.Mui-error)": {
            marginTop: "2px",
            marginBottom: "3px",
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: colours.grey9,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        disableTouchRipple: true,
        disableFocusRipple: true,
        icon: React.createElement(RadioIcon),
        checkedIcon: React.createElement(RadioCheckedIcon),
      },
      styleOverrides: {
        root: {
          color: colours.grey10,
          padding: "6px",
          marginLeft: "3px",
          marginRight: "2px",
          "&.Mui-focusVisible": {
            boxShadow: `inset 0 0 0 4px ${colours.indigo6}`,
          },
          "&.Mui-error": {
            "& svg > circle": {
              stroke: errorPalette.dark,
              r: 10.5,
              strokeWidth: 2.5,
            },
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableTouchRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          color: colours.grey10,
          padding: "4px",
          margin: "5px",
          "& svg": {
            zIndex: 1,
          },
          "&.MuiCheckbox-dark": {
            "&:not(.Mui-checked) svg": {
              fill: colours.white,
            },
            // Add a background behind the icon
            "&::before": {
              content: '""',
              position: "absolute",
              left: "9px",
              right: "9px",
              top: "9px",
              bottom: "9px",
              margin: "-1px",
              background: colours.white,
            },
          },
          "&.Mui-checked svg": {
            fill: brand.main,
          },
          "&.Mui-focusVisible": {
            boxShadow: `inset 0 0 0 4px ${colours.indigo6}`,
            borderRadius: "8px",
          },
          "&.Mui-error": {
            "& svg": {
              color: errorPalette.main,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&.PaddedContent": {
            padding: "40px",
            marginTop: "24px",
          },
        },
      },
    },
  },
});

export default theme;
