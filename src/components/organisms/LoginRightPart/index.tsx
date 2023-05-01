import { Box, Stack } from "@mui/material";
import { TypographyCustom } from "../../atoms/Typography";
import { IconLabelButtons } from "../../molecules/IconButton";
import { MuiButton } from "../../atoms/Button";
import { MuiTextField } from "../../atoms/TextField";

import theme from "../../../Themes/index";

const sxTextField = {
  backgroundColor: "#262529",
  border: "1px solid #413F4D",
  borderRadius: "5px",
};

export const LoginRightPart = () => {
  return (
    <Stack sx={{ md: { maxWidth: "500px" } }} marginX={"auto"}>
      <Stack>
        <TypographyCustom variantType="h6" typotext="Login to Seeder ✨" />

        <TypographyCustom
          variantType="body2"
          typotext="Enter your mail id and password to login"
          color="fontcolor.light"
        />
      </Stack>
      <Stack spacing={2} sx={{ marginY: "10px" }}>
        <MuiTextField
          textvariant="outlined"
          placeholder="Enter your email id"
          startIcon="Assets/loginIcons/direct-notification.svg"
          sx={sxTextField}
        />
        <MuiTextField
          textvariant="outlined"
          placeholder="Enter your password"
          startIcon="Assets/loginIcons/lock.svg"
          endIcon="Assets/loginIcons/eye.svg"
          sx={sxTextField}
        />

        <TypographyCustom
          variantType="body2"
          typotext="Forgot password?"
          color="primary.light"
        />

        <MuiButton
          variant="contained"
          children="continue"
          sx={{ height: "2.5rem" }}
          disableRipple
        />
      </Stack>
      <Stack
        direction="row"
        sx={{ marginY: ".8rem" }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box
          sx={{
            width: "100%",
            height: "0.5px",
            backgroundColor: "white",
            marginRight: "10px",
          }}
        ></Box>
        <div>Or</div>
        <Box
          sx={{
            width: "100%",
            height: "0.5px",
            backgroundColor: "white",
            marginLeft: "10px",
          }}
        ></Box>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <IconLabelButtons
          variant="contained"
          socialIcon="Assets/loginIcons/google.svg"
          altnameIconButton="googleIcon"
          children="google"
          direction="column"
          size="large"
          sx={{
            backgroundColor: theme.palette.groundcolor.light,
            color: theme.palette.fontcolor.dark,
          }}
        />
        <IconLabelButtons
          variant="contained"
          socialIcon="Assets/loginIcons/stripe.svg"
          altnameIconButton="stripeIcon"
          children="stripe"
          direction="column"
          size="large"
          sx={{
            backgroundColor: theme.palette.groundcolor.light,
            color: theme.palette.fontcolor.dark,
          }}
        />
        <IconLabelButtons
          variant="contained"
          socialIcon="Assets/loginIcons/xero.svg"
          altnameIconButton="xeroIcon"
          children="xero"
          direction="column"
          size="large"
          sx={{
            backgroundColor: theme.palette.groundcolor.light,
            color: theme.palette.fontcolor.dark,
          }}
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ marginY: theme.spacing(2) }}
      >
        <TypographyCustom
          variantType="body1"
          typotext={"Don’t have an account?"}
          color="fontcolor.light"
        />
        <TypographyCustom
          variantType="body2"
          typotext="Sign Up"
          color="primary.light"
          sx={{ marginInline: "4px", fontWeight: "600" }}
        />
      </Stack>
    </Stack>
  );
};
