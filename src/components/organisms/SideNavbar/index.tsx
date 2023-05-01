import { Grid } from "@mui/material";
import { LoginTopTitle } from "../../molecules/LoginTopTitle";
import { IconLabelButtons } from "../../molecules/IconButton";
// import theme from "../../../Themes";

export const SideNavbar = () => {
  return (
    <>
      <Grid item md={3} bgcolor="#222124" p={4}>
        <LoginTopTitle
          color="#E8E7F0"
          variantType="h4"
          typotext="Seeder"
          imglink="../../Assets/seeder_logo_login.svg"
          imgname="seeder_logo"
        />
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          height="90%"
          marginY="10px"
          gap={1}
        >
          <Grid item width={"100%"} alignSelf={"flex-start"}>
            <IconLabelButtons
              variant="text"
              socialIcon={"../../Assets/HomeIcons/home.svg"}
              altnameIconButton="HomeIcon"
              children="Home"
              direction="row"
              size="large"
              sx={{
                width: "100%",
                justifyContent: "flex-start",
                color: "fontcolor.light",
              }}
            />
          </Grid>
          <Grid item width={"100%"}>
            <IconLabelButtons
              variant="text"
              socialIcon={"../../Assets/HomeIcons/coin.svg"}
              altnameIconButton={"coinIcon"}
              children="Cash Accleration"
              direction="row"
              size="large"
              sx={{
                width: "100%",
                justifyContent: "flex-start",
                color: "fontcolor.light",
              }}
            />
          </Grid>
          <Grid item width={"100%"} marginTop={"auto"}>
            <IconLabelButtons
              variant={"text"}
              socialIcon={"../../Assets/HomeIcons/flash.svg"}
              altnameIconButton={"flashIcon"}
              children={"watch how to"}
              direction="row"
              size="large"
              sx={{
                width: "100%",
                justifyContent: "flex-start",
                color: "fontcolor.light",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
