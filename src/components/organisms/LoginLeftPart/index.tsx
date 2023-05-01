// import { Stack } from "@mui/material";
// import { LoginTopTitle } from "../../molecules/LoginTopTitle";
// import { Picture, PictureProps } from "../../molecules/Picture";
// import { Updated_With_LogoImg_Typogr_Props } from "../../molecules/LoginTopTitle";

import { Stack } from "@mui/material";
import { LoginTopTitle } from "../../molecules/LoginTopTitle";
import { Picture } from "../../molecules/Picture";

// variantType="h4"
// typotext="Seeder"
// piclink="../../Assets/Business Analysis 3D Illustration_login.svg"
// picname="Business Analysis"
// imglink="../../Assets/seeder_logo_login.svg"
// imgname="seeder_logo"
// color="#E8E7F0"

interface LoginLeftPartProps {
  piclink: string;
  picname: string;
}

export const LoginLeftPart = ({ piclink, picname }: LoginLeftPartProps) =>
  // props: Updated_With_LogoImg_Typogr_Props & PictureProps
  {
    return (
      <Stack>
        <LoginTopTitle
          color="#E8E7F0"
          variantType="h4"
          typotext="Seeder"
          imglink="../../Assets/seeder_logo_login.svg"
          imgname="seeder_logo"
        />
        <Stack direction="column" height="90%" justifyContent="center">
          <Picture
            piclink={piclink}
            picname={picname}
            className="login-image"
          />
        </Stack>
      </Stack>
    );
  };
