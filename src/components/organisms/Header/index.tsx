import { TwoTypography } from "../../molecules/TwoTypography";
import { ProfileIcon } from "../../molecules/ProfileIcon";
import { Grid } from "@mui/material";

interface HeaderProps {
  headerline: string;
  subline: string;
}
export const Header = ({ headerline, subline }: HeaderProps) => {
  return (
    <>
      <Grid item>
        <TwoTypography
          headerVariant="h5"
          subVariant="body2"
          headertitle={headerline}
          subcontent={subline}
        />
      </Grid>
      <Grid>
        <ProfileIcon direction="row" />
      </Grid>
    </>
  );
};
