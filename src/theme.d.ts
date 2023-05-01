import {
  PalatteColor,
  PalatteColorOptions,
  // Theme as MuiTheme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  // interface Theme extends MuiTheme {}

  interface Palette {
    fontcolor: {
      main: PalatteColor;
      light: PalatteColor;
      dark: PalatteColor;
      contrastText: PalatteColor;
    };
    groundcolor: {
      main: PalatteColor;
      light: PalatteColor;
      dark: PalatteColor;
      darker: PalatteColor;
      contrastText: PalatteColor;
    };
  }

  interface PaletteOptions {
    fontcolor: {
      main: PalatteColorOptions;
      light?: PalatteColorOptions;
      dark?: PalatteColorOptions;
      contrastText?: PalatteColorOptions;
    };

    groundcolor: {
      main: PalatteColorOptions;
      light?: PalatteColorOptions;
      dark?: PalatteColorOptions;
      darker?: PalatteColorOptions;
      contrastText?: PalatteColorOptions;
    };
  }
}
