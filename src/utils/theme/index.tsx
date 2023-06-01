import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
  ThemeOptions,
} from "@mui/material/styles";
import { useMemo, ReactNode } from "react";
// import { createTheme, ThemeOptions } from "@mui/material";

import componentsOverride from "./overrides";
import palette from "./palette";
import typography from "./typography";

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  // const isLight = "light";

  const themeOptions: ThemeOptions | any = useMemo(
    () => ({
      palette: palette.light,
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
