import { Button, SxProps } from "@mui/material";
export interface MuiButtonProps {
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  handleClick?: React.ReactEventHandler;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  href?: string;
  sx?: SxProps;
}

export const MuiButton = ({
  variant,
  children,
  handleClick,
  size,
  sx,
}: MuiButtonProps) => {
  return (
    <>
      <Button variant={variant} onClick={handleClick} size={size} sx={sx}>
        {children}
      </Button>
    </>
  );
};
