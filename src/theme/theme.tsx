import { alpha, createTheme } from "@mui/material";

// Custom Modules
declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
    h16r: React.CSSProperties;
    h18r: React.CSSProperties;
    h20r: React.CSSProperties;
    h24r: React.CSSProperties;
    h48r: React.CSSProperties;

    h16b: React.CSSProperties;
    h18b: React.CSSProperties;
    h20b: React.CSSProperties;
    h24b: React.CSSProperties;
    h28b: React.CSSProperties;
    h48b: React.CSSProperties;

    h16eb: React.CSSProperties;
    h18eb: React.CSSProperties;
    h20eb: React.CSSProperties;
    h24eb: React.CSSProperties;
    h48eb: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
    h16r?: React.CSSProperties;
    h18r?: React.CSSProperties;
    h20r?: React.CSSProperties;
    h24r?: React.CSSProperties;
    h48r?: React.CSSProperties;

    h16b?: React.CSSProperties;
    h18b?: React.CSSProperties;
    h20b?: React.CSSProperties;
    h24b?: React.CSSProperties;
    h28b?: React.CSSProperties;
    h48b?: React.CSSProperties;

    h16eb?: React.CSSProperties;
    h18eb?: React.CSSProperties;
    h20eb?: React.CSSProperties;
    h24eb?: React.CSSProperties;
    h48eb?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    "2xl": true;
    "3xl": true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true; // can use new custom type of Typography
    h16r: true;
    h18r: true;
    h20r: true;
    h24r: true;
    h48r: true;

    h16b: true;
    h18b: true;
    h20b: true;
    h24b: true;
    h28b: true;
    h48b: true;

    h16eb: true;
    h18eb: true;
    h20eb: true;
    h24eb: true;
    h48eb: true;
  }
}

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
          ownerState.color === "primary"
            ? {
                width: "100%",
                height: "50px",
                backgroundColor: theme.palette.primary,
                borderRadius: "5px",
                fontSize: "20px",
                fontWeight: 600,
                color: "#FFF",
                textTransform: "none",
                justifyContent: "center",
                alignItems: "center",

                transition: theme.transitions.create([
                  "border-color",
                  "background-color",
                  "box-shadow",
                ]),

                "&:focus, &:hover": {
                  boxShadow: `${alpha(
                    theme.palette.primary.main,
                    0.9
                  )} 0 0 0 0.2rem`,
                  borderColor: theme.palette.primary.main,
                  color: "#2398AB",
                  backgroundColor: theme.palette.primary.light,
                },

                ".Mui-disabled": {
                  color: "#fff",
                  backgroundColor: "#fff",
                },
              }
            : ownerState.color === "secondary"
            ? {
                width: "100%",
                height: "50px",
                backgroundColor: theme.palette.primary.light,
                borderRadius: "5px",
                fontSize: "20px",
                fontWeight: 400,
                color: theme.palette.primary.main,
                textTransform: "none",
                justifyContent: "center",
                alignItems: "center",

                transition: theme.transitions.create([
                  "border-color",
                  "background-color",
                  "box-shadow",
                ]),

                "&:focus, &:hover": {
                  boxShadow: `${alpha(
                    theme.palette.primary.light,
                    1
                  )} 0 0 0 0.2rem`,
                  borderColor: theme.palette.primary.light,
                  color: "#FFF",
                  backgroundColor: theme.palette.primary.main,
                },

                ".Mui-disabled": {
                  color: "#fff",
                  backgroundColor: "#fff",
                },
              }
            : ownerState.color === "error"
            ? {
                width: "100%",
                height: "50px",
                backgroundColor: theme.palette.error.light,
                borderRadius: "5px",
                fontSize: "20px",
                fontWeight: 400,
                color: theme.palette.error.main,
                textTransform: "none",
                justifyContent: "center",
                alignItems: "center",

                transition: theme.transitions.create([
                  "border-color",
                  "background-color",
                  "box-shadow",
                ]),

                "&:focus, &:hover": {
                  boxShadow: `${alpha(
                    theme.palette.error.light,
                    0.9
                  )} 0 0 0 0.2rem`,
                  borderColor: theme.palette.error.light,
                  color: "#FFF",
                  backgroundColor: theme.palette.error.main,
                },

                ".Mui-disabled": {
                  color: "#fff",
                  backgroundColor: "#fff",
                },
              }
            : ownerState.color === "inherit"
            ? {
                width: "100%",
                height: "50px",
                backgroundColor: "#FFF",
                borderRadius: "5px",
                fontSize: "20px",
                fontWeight: 400,
                color: theme.palette.primary.main,
                textTransform: "none",
                justifyContent: "center",
                alignItems: "center",

                transition: theme.transitions.create([
                  "border-color",
                  "background-color",
                  "box-shadow",
                ]),

                "&:focus, &:hover": {
                  boxShadow: `${alpha(
                    theme.palette.primary.main,
                    0.9
                  )} 0 0 0 0.2rem`,
                  borderColor: theme.palette.error.main,
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.primary.light,
                },

                ".Mui-disabled": {
                  color: "#fff",
                  backgroundColor: "#fff",
                },
              }
            : {}),
        }),
      },
    },
  },
  typography: {
    fontFamily: ["Proxima Nova", "sans-serif", "Gilroy"].join(","),

    // regular - 400
    h16r: {
      fontSize: "clamp(12px, 0.83vw, 16px)",
      fontWeight: 400,
      color: "#2398AB",
    },
    h18r: {
      fontSize: "clamp(14px, 0.9375vw, 18px)",
      fontWeight: 400,
      color: "#2398AB",
    },
    h20r: {
      fontSize: "clamp(16px, 1.04vw, 20px)",
      fontWeight: 400,
      color: "#2398AB",
    },
    h24r: {
      fontSize: "clamp(15px, 1.25vw, 24px)",
      fontWeight: 400,
      color: "#2398AB",
    },
    h48r: {
      fontSize: "clamp(36px, 2.5vw, 48px)",
      fontWeight: 400,
      color: "#2398AB",
    },

    // bold - 600
    h16b: {
      fontSize: "clamp(12px, 0.83vw, 16px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h18b: {
      fontSize: "clamp(14px, 0.9375vw, 18px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h20b: {
      fontSize: "clamp(16px, 1.04vw, 20px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h24b: {
      fontSize: "clamp(15px, 1.25vw, 24px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h28b: {
      fontSize: "clamp(22px, 1.458vw, 28px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h48b: {
      fontSize: "clamp(36px, 2.5vw, 48px)",
      fontWeight: 600,
      color: "#2398AB",
    },

    // extraBold - 800
    h16eb: {
      fontSize: "clamp(12px, 0.83vw, 16px)",
      fontWeight: 800,
      color: "#2398AB",
    },
    h18eb: {
      fontSize: "clamp(14px, 0.9375vw, 18px)",
      fontWeight: 800,
      color: "#2398AB",
    },
    h20eb: {
      fontSize: "clamp(16px, 1.04vw, 20px)",
      fontWeight: 800,
      color: "#2398AB",
    },
    h24eb: {
      fontSize: "clamp(15px, 1.25vw, 24px)",
      fontWeight: 800,
      color: "#2398AB",
    },
    h48eb: {
      fontSize: "clamp(36px, 2.5vw, 48px)",
      fontWeight: 800,
      color: "#2398AB",
    },

    // other
    h3: {
      fontSize: "clamp(15px, 1.25vw, 24px)",
      fontWeight: 600,
      color: "#2398AB",
    },
    h4: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#2398AB",
    },
    h5: {
      fontSize: "16px",
      color: "#2398AB",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#222222",
      light: "#F4F4F4",
    },
    secondary: {
      main: "#F4F4F4",
      light: "#65B7C4",
    },
    error: {
      main: "#FD4444",
      light: "#FFEFEF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1920,
    },
  },
});

export default createTheme;
