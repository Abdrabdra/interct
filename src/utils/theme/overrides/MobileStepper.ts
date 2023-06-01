import { Theme } from "@mui/material/styles";

export default function MobileStepper(theme: Theme) {
  return {
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          // ".MuiMobileStepper-dots": {
          //   "& .MuiMobileStepper-dot": {
          //     width: "18px",
          //     height: "3px",
          //     borderRadius: "1px",
          //     backgroundColor: "#E5E7EB",
          //   },
          // },
        },

        dots: {},

        dot: {
          // width: "18px",
          // height: "3px",
          // borderRadius: "1px",
          // backgroundColor: "#E5E7EB",
        },

        dotActive: {
          // backgroundColor: theme.palette.primary.main,
        },
      },
    },
  };
}
