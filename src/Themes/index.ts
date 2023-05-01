import { createTheme, responsiveFontSizes } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultTheme = createTheme({});

const basetheme = createTheme({
  palette: {
    primary: {
      main: "#6C5DD3",
      light: "#B4A9FF",
      // dark: '',
    },
    fontcolor: {
      main: "#E8E7F0",
      light: "#A5A5A6",
      dark: "#C9C8CC",
      contrastText: "#fff",
    },

    groundcolor: {
      main: "#393552",
      light: "#201F24",
      dark: "#040407",
      darker: "#262529",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "#C9C8CC",
            "&.Mui-focused": {
              "& > fieldset": {
                border: "0.5px solid #6C5DD3",
              },
            },
          },
        },
      },
    },
  },
});

// export default responsiveFontSizes(theme);
const theme = responsiveFontSizes(basetheme);
export default theme;
