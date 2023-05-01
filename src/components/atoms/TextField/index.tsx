import "./index.css";
import { useState } from "react";
import {
  InputAdornment,
  TextField,
  ImageListItem,
  SxProps,
} from "@mui/material";

export interface TextFieldProps {
  textvariant: "standard" | "outlined" | "filled";
  placeholder?: string;
  handleChange?: React.ChangeEventHandler;
  startIcon?: string;
  endIcon?: string;
  value?: string;
  sx?: SxProps;
}
export const MuiTextField = (props: TextFieldProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPass, setShowPass] = useState(true);

  const {
    textvariant,
    placeholder,
    handleChange,
    startIcon,
    endIcon,
    value,
    ...rest
  } = props;
  return (
    <>
      <TextField
        variant={textvariant}
        placeholder={placeholder}
        type={showPass ? "text" : "password"}
        value={value}
        onChange={handleChange}
        InputProps={{
          startAdornment: startIcon && (
            <InputAdornment position="start">
              <ImageListItem>
                <img src={startIcon} alt="logo-mess" loading="lazy" />
              </ImageListItem>
            </InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">
              <ImageListItem>
                <img src={endIcon} alt="logo-mess" loading="lazy" />
              </ImageListItem>
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </>
  );
};
