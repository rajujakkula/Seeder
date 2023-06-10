import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TwoTypography } from "../../molecules/TwoTypography";
import ReactDom from "react-dom";
import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TypographyCustom } from "../../atoms/Typography";
import { MuiTextField } from "../../atoms/TextField";
import { MuiButton } from "../../atoms/Button";
import { LaunchedCashKick } from "../PopUpLaunchedCashKick";
import { useState } from "react";

const sxBoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "groundcolor.darker",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
  border: "none",
  outline: "none",
};

interface ReviewCreditModalProps {
  open: boolean;
  handleClose: () => void;
}

export const ReviewCreditModal = ({
  open,
  handleClose,
}: ReviewCreditModalProps) => {
  const [launchedCash, setLaunchCash] = useState<boolean>(false);

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={sxBoxStyle}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <TwoTypography
                  headertitle={"Name your cash kick"}
                  subcontent={"Add a name to identify your cash kick"}
                />
                <CloseIcon
                  sx={{ color: "#D4D2DE", cursor: "pointer" }}
                  onClick={handleClose}
                />
              </Stack>
              <Stack direction="column" marginY={1}>
                <TypographyCustom
                  variantType="body2"
                  typotext="Cash kick name"
                  color="fontcolor.light"
                  sx={{ marginY: 1 }}
                />
                <MuiTextField
                  textvariant="outlined"
                  placeholder="Ex: marketing expenses"
                  size="small"
                  sx={{
                    bgcolor: "#3A3A3D",
                    border: "1px solid #413F4D",
                    borderRadius: "10px",
                  }}
                />
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                gap="10px"
                marginTop="15px"
              >
                <MuiButton
                  variant="contained"
                  children="Cancel"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "#2D2D30",
                    "&:hover": {
                      bgcolor: "#2D2D30",
                    },
                  }}
                  handleClick={handleClose}
                />
                <MuiButton
                  variant="contained"
                  children="Create Cash Kick"
                  sx={{
                    textTransform: "capitalize",
                  }}
                  disableRipple
                  handleClick={() => setLaunchCash(true)}
                />
              </Stack>
            </Box>
          </Fade>
        </Modal>
      </div>
      <LaunchedCashKick
        open={launchedCash}
        setLaunchCash={setLaunchCash}
        handleClose={handleClose}
      />
    </>,
    document.getElementById("createPortalModal")!
  );
};
