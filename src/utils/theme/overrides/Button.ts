import { Theme } from "@mui/material/styles";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",

          "&:hover": {
            // backgroundColor: theme.palette.grey[800],
            boxShadow: "none",
          },

          "&:active": {
            // backgroundColor: theme.palette.secondary[800],
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          "&:hover": {
            // backgroundColor: theme.palette.grey[800],
            boxShadow: "none",
          },

          "&:active": {
            // backgroundColor: theme.palette.secondary[800],
          },
        },
        containedPrimary: {
          "&:hover": {
            // backgroundColor: theme.palette.grey[800],
            boxShadow: "none",
          },

          "&:active": {
            // backgroundColor: theme.palette.secondary[800],
          },
        },
      },
    },
  };
}

// export const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: ({ ownerState }) => ({
//           ...(ownerState.variant === "contained" &&
//           ownerState.color === "primary"
//             ? {
//                 width: "100%",
//                 height: "50px",
//                 backgroundColor: theme.palette.primary,
//                 borderRadius: "5px",
//                 fontSize: "20px",
//                 fontWeight: 600,
//                 color: "#FFF",
//                 textTransform: "none",
//                 justifyContent: "center",
//                 alignItems: "center",

//                 transition: theme.transitions.create([
//                   "border-color",
//                   "background-color",
//                   "box-shadow",
//                 ]),

//                 "&:focus, &:hover": {
//                   boxShadow: `${alpha(
//                     theme.palette.primary.main,
//                     0.9
//                   )} 0 0 0 0.2rem`,
//                   borderColor: theme.palette.primary.main,
//                   color: "#2398AB",
//                   backgroundColor: theme.palette.primary.light,
//                 },

//                 ".Mui-disabled": {
//                   color: "#fff",
//                   backgroundColor: "#fff",
//                 },
//               }
//             : ownerState.color === "secondary"
//             ? {
//                 width: "100%",
//                 height: "50px",
//                 backgroundColor: theme.palette.primary.light,
//                 borderRadius: "5px",
//                 fontSize: "20px",
//                 fontWeight: 400,
//                 color: theme.palette.primary.main,
//                 textTransform: "none",
//                 justifyContent: "center",
//                 alignItems: "center",

//                 transition: theme.transitions.create([
//                   "border-color",
//                   "background-color",
//                   "box-shadow",
//                 ]),

//                 "&:focus, &:hover": {
//                   boxShadow: `${alpha(
//                     theme.palette.primary.light,
//                     1
//                   )} 0 0 0 0.2rem`,
//                   borderColor: theme.palette.primary.light,
//                   color: "#FFF",
//                   backgroundColor: theme.palette.primary.main,
//                 },

//                 ".Mui-disabled": {
//                   color: "#fff",
//                   backgroundColor: "#fff",
//                 },
//               }
//             : ownerState.color === "error"
//             ? {
//                 width: "100%",
//                 height: "50px",
//                 backgroundColor: theme.palette.error.light,
//                 borderRadius: "5px",
//                 fontSize: "20px",
//                 fontWeight: 400,
//                 color: theme.palette.error.main,
//                 textTransform: "none",
//                 justifyContent: "center",
//                 alignItems: "center",

//                 transition: theme.transitions.create([
//                   "border-color",
//                   "background-color",
//                   "box-shadow",
//                 ]),

//                 "&:focus, &:hover": {
//                   boxShadow: `${alpha(
//                     theme.palette.error.light,
//                     0.9
//                   )} 0 0 0 0.2rem`,
//                   borderColor: theme.palette.error.light,
//                   color: "#FFF",
//                   backgroundColor: theme.palette.error.main,
//                 },

//                 ".Mui-disabled": {
//                   color: "#fff",
//                   backgroundColor: "#fff",
//                 },
//               }
//             : ownerState.color === "inherit"
//             ? {
//                 width: "100%",
//                 height: "50px",
//                 backgroundColor: "#FFF",
//                 borderRadius: "5px",
//                 fontSize: "20px",
//                 fontWeight: 400,
//                 color: theme.palette.primary.main,
//                 textTransform: "none",
//                 justifyContent: "center",
//                 alignItems: "center",

//                 transition: theme.transitions.create([
//                   "border-color",
//                   "background-color",
//                   "box-shadow",
//                 ]),

//                 "&:focus, &:hover": {
//                   boxShadow: `${alpha(
//                     theme.palette.primary.main,
//                     0.9
//                   )} 0 0 0 0.2rem`,
//                   borderColor: theme.palette.error.main,
//                   color: theme.palette.primary.main,
//                   backgroundColor: theme.palette.primary.light,
//                 },

//                 ".Mui-disabled": {
//                   color: "#fff",
//                   backgroundColor: "#fff",
//                 },
//               }
//             : {}),
//         }),
//       },
//     },
//   },
// });
