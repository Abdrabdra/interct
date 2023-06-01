import {
  Box,
  Button,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import AbsoluteElements from "./AbsoluteElements";

interface Props {
  links: Links[];
}

interface Links {
  id: number;
  route: string;
  icon: any;
  text: string;
}

const NavigationDrawer: FC<Props> = ({ links }) => {
  return (
    <Paper
      sx={{
        height: "56px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "12px",
        marginBottom: "12px",
        backgroundColor: "secondary.300",
      }}
    >
      {links.map((link) => (
        <NavLink
          to={link.route}
          key={link.id}
          style={{ textDecoration: "none", backgroundColor: "none" }}
        >
          {({ isActive }) => (
            <Button sx={{ borderRadius: "25%", width: "56px", height: "56px" }}>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                {isActive && (
                  <>
                    <AbsoluteElements />
                  </>
                )}
                <Icon
                  component={link.icon}
                  sx={{
                    fontSize: "25px",
                    color: isActive ? "common.white" : "grey.800",
                  }}
                />
                {isActive && (
                  <Typography
                    align="center"
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      lineHeight: "0.875rem",
                      color: "common.white",
                      textDecorationLine: "none",
                    }}
                  >
                    {link.text}
                  </Typography>
                )}
              </Box>
            </Button>
          )}
        </NavLink>
      ))}
    </Paper>
  );
};

export default NavigationDrawer;
