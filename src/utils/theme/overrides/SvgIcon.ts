import { Theme } from "@mui/material/styles";

export default function SvgIcon(theme: Theme) {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  };
}
