import { Theme } from "@mui/material/styles";

export default function Accordion(theme: Theme) {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "10px",

          "&:first-of-type": {
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          },
          "&:last-of-type": {
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          },

          "&:before": {
            display: "none",
          },
        },
      },
    },
  };
}
