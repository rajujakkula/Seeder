import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TwoTypography } from "../../molecules/TwoTypography";
import ReactDom from "react-dom";
import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TypographyCustom } from "../../atoms/Typography";
import { MuiButton } from "../../atoms/Button";
import { Picture } from "../../molecules/Picture";

const sxBoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
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
  setLaunchCash: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LaunchedCashKick = ({
  open,
  handleClose,
  setLaunchCash,
}: ReviewCreditModalProps) => {
  const closePopUp = () => {
    setLaunchCash(false);
    handleClose();
  };
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={closePopUp}
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
                  headertitle={"Cash kick launched successfully!"}
                  subcontent={"We are reviewing your cash kick"}
                  headerVariant="h5"
                  subVariant="body1"
                />
                <CloseIcon
                  sx={{ color: "#D4D2DE", cursor: "pointer" }}
                  onClick={closePopUp}
                />
              </Stack>
              <Stack
                direction="column"
                marginY={1}
                alignItems="center"
                justifyContent="center"
              >
                <Picture
                  piclink="/Assets/NewCashKickIcons/successful-rotating-cash.svg"
                  picname="successful-rotating-cash"
                />
                <TypographyCustom
                  typotext="Your cash kick is under review"
                  variantType="h6"
                  color="fontcolor.main"
                />
                <TypographyCustom
                  typotext="It will remain on pending state until we review it internally. This can take upto 5 mins to couple of hours. Once reviewed, the cash will be transferred to your account and you’ll be notified."
                  color="fontcolor.light"
                  variantType="subtitle2"
                  sx={{
                    textAlign: "center",
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
                  children="Close"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "#2D2D30",
                    "&:hover": {
                      bgcolor: "#2D2D30",
                    },
                  }}
                  handleClick={closePopUp}
                />
                <MuiButton
                  variant="contained"
                  children="View Cash Kicks"
                  sx={{
                    textTransform: "capitalize",
                  }}
                  disableRipple
                  disableFocusRipple
                />
              </Stack>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>,
    document.getElementById("createPortalModal")!
  );
};
