import theme from "../../../Themes";
import { TypographyCustom } from "../../atoms/Typography";

interface TwoTypographyProps {
  headertitle: string;
  subcontent: string;
}

export const TwoTypography = (props: TwoTypographyProps) => {
  const { headertitle, subcontent } = props;
  return (
    <div>
      <TypographyCustom
        variantType="h5"
        typotext={headertitle}
        color={theme.palette.fontcolor.main}
      />
      <TypographyCustom
        variantType="body2"
        typotext={subcontent}
        color={theme.palette.fontcolor.light}
      />
    </div>
  );
};
