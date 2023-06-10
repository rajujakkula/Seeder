import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/Themes/index";
import SignUpPage from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { CashAcclerationPage } from "./pages/CashAccleration";
import { NewCashKickPage } from "./pages/NewCashKickPage";
import { LayOutPage } from "./pages/LayoutPage";

import { Routes, Route } from "react-router-dom";
import { SelectedContractsPage } from "./pages/SelectedContractsPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />.
          <Route path="/dashboard" element={<LayOutPage />}>
            <Route index element={<HomePage />} />
            <Route index path="home" element={<HomePage />} />
            <Route path="cash_acceleration" element={<CashAcclerationPage />} />
            <Route path="newcashkick" element={<NewCashKickPage />} />
            <Route
              path="selectedcontracts"
              element={<SelectedContractsPage />}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
