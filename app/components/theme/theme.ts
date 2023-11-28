import { createTheme } from "@mui/material";
import { Rubik, Poppins } from "next/font/google";

const rubik = Rubik({ weight: ["700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["500", "600", "700"], subsets: ["latin"] });

const theme = createTheme({
  palette:{
    primary:{
      main:"#2C73B5",
    }
  },
  typography: {
    fontSize: 16,
    headlineLarge: {
      fontFamily: `${rubik.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
    headlineMedium: {
      fontFamily: `${rubik.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
    },
    headlineSmall: {
      fontFamily: `${rubik.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
    displaySmall: {
      fontFamily: `${rubik.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontWeight: "700",
    },
    titleMedium:{
      fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontSize: "1rem",
      fontWeight: "700",
      lineHeight: "1.5rem",
      letterSpacing: "0.15px"
    },
    titleSmall: {
      fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontSize: "0.875rem",
      fontWeight: "600",
      lineHeight: "1.25rem",
      letterSpacing: "0.1px",
    },
    labelSmall: {
      fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontWeight: "600",
      fontSize: "0.6875rem",
      lineHeight: "1rem",
      letterSpacing: "0.5px",
    },
    labelLargeProminent: {
      fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontWeight: "700",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.1px",
    },
    bodyLarge: {
      fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
    },
    bodyMedium: {
      fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.25px",
      fontWeight: "500",
    },
    bodySmall:{
      fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
      fontSize: "0.75rem",
      fontWeight: "500",
      lineHeight: "1rem",
      letterSpacing: "0.048px",
    },
  },
  components: {
    MuiAppBar:{
      styleOverrides:{
        root:{
          backgroundColor: "#FFFFFF",
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
        },
      },
    },
    MuiFormHelperText:{
      styleOverrides:{
        root:{
          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
          fontSize: "0.75rem"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        filled: {
          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
          fontSize: "1rem",
          lineHeight: "1.5rem",
          letterSpacing: "0.5px",
          fontWeight: "500",
        },
        root: {
          "&.Mui-focused": {
            color: "#0098DB",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
          fontSize: "1rem",
          lineHeight: "1.5rem",
          letterSpacing: "0.5px",
          backgroundColor: "transparent",
          border: "1px solid #87919E",
          borderRadius: "12px",
          "&::before": {
            borderBottom: "none",
          },
          "&:hover": {
            borderWidth: "1px",
            backgroundColor: "rgba(219,227,240,0.7)",
          },
          "&:hover&::before": {
            borderBottom: "none",
          },
          "&::after": {
            borderBottom: "none",
          },
          "&.Mui-focused": {
            border: "2px solid #0098DB",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: "none",
          color: "#0D1217",
          fontFamily: `${rubik.style.fontFamily}, Helvetica, Arial, sans-serif`,
          borderRadius: "12px",
          border: "1px solid #2C73B5",
          background: "#4DB5F7",
          boxShadow:
            "0px 2px 1px 0px rgba(0, 0, 0, 0.15), 0px 0px 0px 2px rgba(255, 255, 255, 0.45) inset, 0px 1px 0px 1px rgba(255, 255, 255, 0.75) inset",
          "&:hover": {
            background: "#91CFFF",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 0px 0px 2px rgba(255, 255, 255, 0.50) inset, 0px 1px 0px 1px rgba(255, 255, 255, 0.75) inset",
          },
          "&:focus-visible": {
            outline: "2px solid #0080B8",
            outlineOffset: "2px",
            borderRadius: "14px",
          },
        },
        text: {
          textTransform: "none",
          fontFamily: `${rubik.style.fontFamily}, Helvetica, Arial, sans-serif`,
          '&.Mui-disabled': {
            color: "#A3ADBA",
          }
        },
        sizeMedium: {
          padding: "10px 24px",
          fontSize: "0.875rem",
          fontWeight: "700",
          lineHeight: "1.25rem",
          letterSpacing: "0.1px",
        },
        sizeLarge: {
          padding: "20px 32px",
          fontSize: "1.125rem",
          fontWeight: "700",
          lineHeight: "1.5rem",
          letterSpacing: "0.1px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "solid",
          borderWidth: "0px 2px",
          borderColor: "#BDC7D4",
          overflow: "hidden",
          "&:first-of-type": {
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            border: "solid",
            borderWidth: "2px",
            borderColor: "#BDC7D4",
          },
          "&:last-of-type": {
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            border: "solid",
            borderWidth: "2px",
            borderColor: "#BDC7D4",
          },
          "&.Mui-expanded": {
            margin: "0px",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "24px 32px",
          "&.Mui-expanded": {
            boxShadow: "inset 8px 0px #0080B8",
            backgroundColor: "#FFF",
          },
        },
        content: {
          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
          fontSie: "1rem",
          fontWeight: "700",
          lineHeight: "1.5rem",
          letterSpacing: "0.1px",
          margin: "0px",
        },
        expandIconWrapper: ({ ownerState }) => ({
          color: "#0080B8",
          "&.Mui-expanded": {
            color: "#0080B8",
          },
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "8px 32px 24px 32px",
          boxShadow: "inset 8px 0px #0080B8;",
          backgroundColor: "#FFF",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#2C73B5",
            borderColor: "#2C73B5",
          },
        },
      },
    },
    MuiCheckbox:{
      styleOverrides:{
        root:{
        }
      }
    },
    MuiFormControlLabel:{
      styleOverrides:{
        label:{
          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
        }
      }
    },
    MuiStepLabel:{
      styleOverrides:{
        label:{
          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          fontWeight: "700",
          letterSpacing: "0.1px",
          '&.Mui-active':{
            fontWeight: "700",
          },
          '&.Mui-completed':{
            fontWeight: "700",
            color: "#87919E",
          },
          '&.Mui-disabled':{
            color: "#87919E",
          },
        },
      }
    },
    MuiFab:{
      styleOverrides:{
        root:({ownerState}) => ({
          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          fontWeight: "700",
          letterSpacing: "0.1px",
          ...(ownerState.color === "whatsapp") && {
            backgroundColor: "#25D366",
            color: "#FFF",
            textTransform: "none",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            position: "fixed",

            '&:hover': {
              backgroundColor: "#10DE5B",
            },
          },
        }),
      }
    }
  },
});

export default theme;
