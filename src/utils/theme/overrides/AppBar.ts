import { Theme } from "@mui/material/styles";

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
}
