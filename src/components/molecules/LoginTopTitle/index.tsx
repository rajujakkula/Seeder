import { Stack } from "@mui/material";
import { LogoImg } from "../../atoms/LogoImg";
import { TypographyCustom } from "../../atoms/Typography";

import { TypographyProps } from "../../atoms/Typography";
import { LogoImgProps } from "../../atoms/LogoImg";

export interface Updated_With_LogoImg_Typogr_Props
  extends TypographyProps,
    LogoImgProps {}

export const LoginTopTitle = (props: TypographyProps & LogoImgProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <LogoImg {...props} />
      <TypographyCustom {...props} />
    </Stack>
  );
};
