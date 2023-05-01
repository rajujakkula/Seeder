import { PalatteColor, PalatteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
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
