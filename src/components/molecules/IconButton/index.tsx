import { ImageListItem, SxProps } from "@mui/material";
import { MuiButton, MuiButtonProps } from "../../atoms/Button";
import Stack from "@mui/material/Stack";
// import theme from "../../../Themes/index";

export interface CustomIconLabelButton {
  variant?: "text" | "contained" | "outlined";
  socialIcon?: string;
  altnameIconButton?: string;
  children?: string;
  socialMediaClick?: React.ReactEventHandler;
  direction?: "row" | "column";
  size?: "medium" | "large";
  sx?: SxProps;
  sxImg?: SxProps;
}

// export const IconLabelButtons = (props: CustomIconLabelButton) => {
export const IconLabelButtons = (
  props: CustomIconLabelButton & MuiButtonProps
) => {
  const {
    variant,
    socialMediaClick,
    children,
    socialIcon,
    direction,
    altnameIconButton,
    size,
    sx,
    sxImg,
  } = props;
  return (
    <MuiButton
      variant={variant}
      handleClick={socialMediaClick}
      size={size}
      sx={sx}
    >
      <Stack direction={direction} spacing={2} alignItems="center">
        <ImageListItem sx={sxImg}>
          <img
            src={socialIcon}
            alt={altnameIconButton}
            loading="lazy"
            style={{ width: "1.5rem", height: "1.5rem", padding: "0.2rem" }}
          />
        </ImageListItem>
        {children}
      </Stack>
    </MuiButton>
  );
};
