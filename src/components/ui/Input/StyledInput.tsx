import {
  InputBase,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const StyledNewInput = styled(InputBase)(({ theme }) => ({
  width: "100%",

  "& .MuiInputBase-input": {
    borderRadius: "5px",
    position: "relative",
    backgroundColor: theme.palette.secondary,
    fontSize: "24px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "25px",
    color: theme.palette.primary.main,

    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus, &:hover": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.9)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));