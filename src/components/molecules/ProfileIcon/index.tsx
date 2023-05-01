import { ImageListItem, Stack } from "@mui/material";
import { MuiButton } from "../../atoms/Button";
import { CustomIconLabelButton } from "../IconButton";

export const ProfileIcon = ({
  socialMediaClick,
  size,
  direction,
  altnameIconButton,
}: CustomIconLabelButton) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const userprofileIcon = socialIcon;

  return (
    <MuiButton variant="text" handleClick={socialMediaClick} size={size}>
      <Stack direction={direction} spacing={2} alignItems="center">
        <ImageListItem>
          <img
            src="../../Assets/HomeIcons/avatar.svg"
            alt={altnameIconButton}
            loading="lazy"
            style={{ borderRadius: "50%" }}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="../../Assets/HomeIcons/arrow-bottom.svg"
            alt="arrow-bottom"
            loading="lazy"
          />
        </ImageListItem>
      </Stack>
    </MuiButton>
  );
};
