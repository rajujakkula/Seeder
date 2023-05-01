import { Box, Stack } from "@mui/material";
import { TypographyCustom } from "../../atoms/Typography";
import { MuiButton } from "../../atoms/Button";
import { Picture } from "../Picture";
export const CustomCard = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      bgcolor="primary.main"
      borderRadius="5px"
    >
      <Box>
        <TypographyCustom
          variantType="h6"
          typotext={
            <>
              Congratulations you <br />
              are ready to start!
            </>
          }
          sx={{
            fontWeight: "bold",
            lineHeight: "25px",
            marginBottom: "12px",
          }}
        />
        <TypographyCustom
          variantType="subtitle2"
          typotext={
            <>
              You are approved for funding. We are
              <br />
              ready to advance you upto <strong> $ 8.8M </strong>
            </>
          }
        />
        <MuiButton
          variant="outlined"
          children="Learn More"
          sx={{
            zIndex: "2",
            color: "white",
            borderColor: "white",
            marginTop: "20px",
          }}
        />
      </Box>

      <Picture piclink="../../Assets/HomeIcons/asset.svg" picname="congrats" />
    </Stack>
  );
};
