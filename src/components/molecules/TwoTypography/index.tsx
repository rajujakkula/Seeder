import theme from "../../../Themes";
import { TypographyCustom } from "../../atoms/Typography";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2";

interface TwoTypographyProps {
  headertitle: string;
  headerVariant?: TypographyVariant;
  subcontent: string;
  subVariant?: TypographyVariant;
}

export const TwoTypography = (props: TwoTypographyProps) => {
  const { headertitle, subcontent, headerVariant, subVariant } = props;
  return (
    <div>
      <TypographyCustom
        typotext={headertitle}
        color={theme.palette.fontcolor.main}
        variantType={headerVariant}
      />
      <TypographyCustom
        typotext={subcontent}
        color={theme.palette.fontcolor.light}
        variantType={subVariant}
      />
    </div>
  );
};
