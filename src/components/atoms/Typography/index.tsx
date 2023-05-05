import { SxProps, Typography } from "@mui/material";

export interface TypographyProps {
  variantType?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  typotext?: React.ReactNode;
  color?: React.CSSProperties["color"];
  sx?: SxProps;
  children?: React.ReactNode;
}
export const TypographyCustom = ({
  variantType,
  typotext,
  color,
  sx,
  children,
}: TypographyProps) => {
  return (
    <Typography variant={variantType} color={color} sx={sx}>
      {typotext || children}
    </Typography>
  );
};
