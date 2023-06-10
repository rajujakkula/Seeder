import React from "react";
import { Grid } from "@mui/material";
import { SideNavbar } from "../../components/organisms/SideNavbar";
import theme from "../../Themes/index";
import { Outlet } from "react-router-dom";

export const LayOutPage = () => {
  return (
    <Grid
      container
      bgcolor={theme.palette.groundcolor.dark}
      flexWrap="wrap"
      direction="row"
    >
      <SideNavbar />
      <Outlet />
    </Grid>
  );
};
