import { Stack } from "@mui/material";
import "./index.css";

export interface PictureProps {
  piclink: string;
  picname: string;
  handleClick?: () => void;
  styles?: React.CSSProperties;
  className?: "login-image";
}

export const Picture = (props: PictureProps) => {
  const { piclink, picname, handleClick, className, styles } = props;
  return (
    <Stack direction="row" justifyContent="center">
      <img
        src={piclink}
        alt={picname}
        onClick={handleClick}
        className={className}
        style={styles}
      />
    </Stack>
  );
};
