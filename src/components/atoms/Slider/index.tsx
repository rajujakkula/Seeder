import { Slider, SxProps } from "@mui/material";

interface MuiSliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  handleChange?: () => void;
  aria_label?: string | undefined;
  sx?: SxProps;
  valueLabelDisplay?: "auto";
}

export const MuiSlider = (props: MuiSliderProps) => {
  const {
    value,
    defaultValue,
    min,
    max,
    handleChange,
    aria_label,
    valueLabelDisplay,
    sx,
  } = props;
  return (
    <>
      <Slider
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        onChange={handleChange}
        aria-label={aria_label}
        sx={sx}
        valueLabelDisplay={valueLabelDisplay}
      />
    </>
  );
};
