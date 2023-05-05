import { Box } from "@mui/material";
import { TypographyCustom } from "../../atoms/Typography";
import { MuiButton } from "../../atoms/Button";

export const LaunchCashKick = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="groundcolor.light"
      width="100%"
      height="100%"
      justifyContent="flex-start"
      alignItems="center"
      padding={2.5}
      borderRadius={2}
      gap={2}
    >
      <TypographyCustom
        variantType="h5"
        typotext={
          <>
            Launch a new
            <br /> Cash Kick
          </>
        }
        sx={{ alignSelf: "flex-start", fontWeight: "600" }}
      />
      <TypographyCustom
        variantType="body1"
        typotext={
          <>
            You have upto{" "}
            <strong>
              $<span>880,000.00</span>
            </strong>{" "}
            available for a new cash advance
          </>
        }
        color="fontcolor.light"
      />
      <MuiButton
        variant="contained"
        children="New Cash Kick"
        sx={{
          width: "100%",
          textTransform: "capitalize",
          height: "25%",
          borderRadius: "10px",
          fontWeight: "500",
          fontSize: "1.125rem",
        }}
      />
    </Box>
  );
};
