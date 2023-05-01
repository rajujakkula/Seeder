/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/Themes/index";
import SignUpPage from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { Grid } from "@mui/material";
import { SideNavbar } from "./components/organisms/SideNavbar";
import { CashAcclerationPage } from "./pages/CashAccleration";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <LoginPage /> */}
        {/* <SignUpPage /> */}
        <Grid
          container
          bgcolor={theme.palette.groundcolor.dark}
          flexWrap="wrap"
          direction="row"
        >
          <SideNavbar />
          {/* <HomePage /> */}
          <CashAcclerationPage />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
