import { Button, Grid, Stack } from "@mui/material";
import { Header } from "../../organisms/Header";
import { NewCashKick } from "../../molecules/NewCashkick";
import { TypographyCustom } from "../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Picture } from "../../molecules/Picture";
import { LogoImg } from "../../atoms/LogoImg";
import SyncIcon from "@mui/icons-material/Sync";
export const CashAcclerationTemplate = () => {
  return (
    <>
      <Grid item md={9} color="white" padding={4}>
        <Grid container direction="column" gap={2}>
          <Grid item lg={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Header
                headerline={"Cash acceleration"}
                subline={"Place to create new cash kicks to run your business"}
              />
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Grid container direction="row" color={"white"} spacing={2}>
              <Grid item md={8} xs={12} sm={6}>
                <Stack
                  direction="row"
                  height={"100%"}
                  alignItems="center"
                  justifyContent="space-around"
                  bgcolor="groundcolor.light"
                  borderRadius={2}
                >
                  <Stack direction="column" spacing={1}>
                    <div>
                      <LogoImg
                        imglink="../../Assets/cashAcceleration/calendar.svg"
                        imgname="calendar"
                        styles={{
                          backgroundColor: "#28272B",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div>
                      <Stack direction="column">
                        <Stack
                          direction="row"
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={0.5}
                        >
                          <TypographyCustom
                            variantType="subtitle2"
                            typotext="Term cap"
                          />
                          <InfoOutlinedIcon
                            sx={{ color: "fontcolor.light" }}
                            fontSize="small"
                          />
                        </Stack>
                        <TypographyCustom
                          variantType="body1"
                          typotext="12 months"
                          sx={{ fontWeight: "bold" }}
                        />
                      </Stack>
                    </div>
                  </Stack>
                  <Stack direction="column" spacing={1}>
                    <div>
                      <LogoImg
                        imglink="../../Assets/cashAcceleration/document-download.svg"
                        imgname="calendar"
                        styles={{
                          backgroundColor: "#28272B",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div>
                      <Stack direction="column">
                        <Stack
                          direction="row"
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={0.5}
                        >
                          <TypographyCustom
                            variantType="subtitle2"
                            typotext="Available credit"
                          />
                          <InfoOutlinedIcon
                            sx={{ color: "fontcolor.light" }}
                            fontSize="small"
                          />
                        </Stack>
                        <TypographyCustom
                          variantType="body1"
                          typotext={`$${880}.0k`}
                          sx={{ fontWeight: "bold" }}
                        />
                      </Stack>
                    </div>
                  </Stack>
                  <Stack spacing={1} direction="column">
                    <div>
                      <LogoImg
                        imglink="../../Assets/cashAcceleration/percentage-square.svg"
                        imgname="calendar"
                        styles={{
                          backgroundColor: "#28272B",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div>
                      <Stack direction="column">
                        <Stack
                          direction="row"
                          alignItems={"center"}
                          justifyContent={"center"}
                          spacing={0.5}
                        >
                          <TypographyCustom
                            variantType="subtitle2"
                            typotext="Max interest rate"
                          />
                          <InfoOutlinedIcon
                            sx={{ color: "fontcolor.light" }}
                            fontSize="small"
                          />
                        </Stack>
                        <TypographyCustom
                          variantType="body1"
                          typotext="12.00%"
                          sx={{ fontWeight: "bold" }}
                        />
                      </Stack>
                    </div>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={4} xs={12} sm={6}>
                <NewCashKick />
              </Grid>
            </Grid>
          </Grid>
          {/* Table start here */}
          <Grid
            item
            lg={12}
            bgcolor="groundcolor.light"
            padding={2}
            borderRadius={2}
            marginTop={-3}
          >
            <Stack direction="column" gap={1}>
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"center"}
                  spacing={1}
                >
                  <TypographyCustom
                    variantType="body1"
                    typotext="Your Payment"
                  />
                  <InfoOutlinedIcon
                    sx={{ color: "fontcolor.light" }}
                    fontSize="small"
                  />
                </Stack>
                <div>
                  <Button
                    variant="text"
                    startIcon={<SyncIcon />}
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Sync Now
                  </Button>
                </div>
              </Stack>
              <Stack direction={"row"} spacing={4}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "fontcolor.light",
                    borderColor: "fontcolor.light",
                    borderRadius: "10px",
                    "&:hover": {
                      variant: "contained",
                      color: "primary.main",
                    },
                  }}
                >
                  {" "}
                  My Contracts{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "fontcolor.light",
                    borderColor: "fontcolor.light",
                    borderRadius: "10px",
                    "&:hover": {
                      variant: "contained",
                      color: "primary.main",
                    },
                  }}
                >
                  {" "}
                  My Cash Kicks{" "}
                </Button>
              </Stack>
              <Stack direction="column" gap={1}>
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  bgcolor={"groundcolor.darker"}
                  padding={1}
                  color={"fontcolor.light"}
                >
                  <TypographyCustom variantType="body1" typotext="Name" />
                  <TypographyCustom variantType="body1" typotext="status" />
                  <TypographyCustom variantType="body1" typotext="Type" />
                  <TypographyCustom
                    variantType="body1"
                    typotext="Per Payment"
                  />
                  <TypographyCustom
                    variantType="body1"
                    typotext="Total financed"
                  />
                  <TypographyCustom
                    variantType="body1"
                    typotext="Total available"
                  />
                </Stack>
                <Stack
                  direction="column"
                  sx={{
                    height: "180px",
                    overflowY: "scroll",
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar": {
                      width: "2px",
                      backgroundColor: "#F5F5F5",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      borderRadius: "10px",
                      backgroundColor: "#AAA",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-around"
                    padding={1}
                  >
                    <TypographyCustom variantType="body1" typotext="Name" />
                    <TypographyCustom variantType="body1" typotext="status" />
                    <TypographyCustom variantType="body1" typotext="Type" />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Per Payment"
                    />
                    <TypographyCustom variantType="body1" typotext="-" />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Total available"
                    />
                  </Stack>{" "}
                  {/* <Picture
                    piclink="../../Assets/HomeIcons/cheque.svg"
                    picname="asset"
                  /> */}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
