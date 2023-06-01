import { Theme } from "@mui/material/styles";

export default function Input(theme: Theme) {
  return {
    MuiInput: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          height: "50px",
          boxSizing: "border-box",
          backgroundColor: theme.palette.common.white,
          borderRadius: "15px",
          paddingTop: "16px",
          paddingLeft: "16px",
          paddingRight: "8px",
          paddingBottom: "16px",

          "&::placeholder": {
            opacity: 1,
            color: theme.palette.common.black,
          },
        },
      },
    },
  };
}
