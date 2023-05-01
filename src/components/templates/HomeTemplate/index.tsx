import { Grid, Stack } from "@mui/material";
import { Header } from "../../organisms/Header";
import { CustomCard } from "../../molecules/Card";
import { NewCashKick } from "../../molecules/NewCashkick";
import { TypographyCustom } from "../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Picture } from "../../molecules/Picture";

export const HomeTemplate = () => {
  return (
    <>
      <Grid item md={9} color="white" padding={4}>
        <Grid container direction="column" gap={1.5}>
          <Grid item lg={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Header
                headerline={`Good ${
                  new Date().getHours() < 12
                    ? "morning✋"
                    : new Date().getHours() < 18
                    ? "afternoon✋"
                    : "evening✋"
                }`}
                subline={new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              />
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Grid container direction="row" color={"white"} spacing={2}>
              <Grid item md={8} xs={12} sm={6}>
                <CustomCard />
              </Grid>
              <Grid item md={4} xs={12} sm={6}>
                <NewCashKick />
              </Grid>
            </Grid>
          </Grid>
          {/* Table start here */}
          <Grid item md={12} bgcolor="groundcolor.light" padding={2}>
            <Stack direction="column" gap={1}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <TypographyCustom variantType="body1" typotext="Your Payment" />
                <InfoOutlinedIcon
                  sx={{ color: "fontcolor.light" }}
                  fontSize="small"
                />
              </Stack>
              <Stack direction="column" gap={1}>
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  bgcolor={"groundcolor.darker"}
                  padding={1}
                  color={"fontcolor.light"}
                >
                  <TypographyCustom variantType="body1" typotext="Due date" />
                  <TypographyCustom variantType="body1" typotext="Status" />
                  <TypographyCustom
                    variantType="body1"
                    typotext="Expected amount"
                  />
                  <TypographyCustom
                    variantType="body1"
                    typotext="Outstanding"
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
                  {/* <Stack
                    direction="row"
                    justifyContent="space-around"
                    padding={1}
                  >
                    <TypographyCustom variantType="body1" typotext="Due date" />
                    <TypographyCustom variantType="body1" typotext="status" />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Expected amount"
                    />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Outstanding"
                    />
                  </Stack>{" "}
                  <Stack
                    direction="row"
                    padding={1}
                    justifyContent="space-around"
                  >
                    <TypographyCustom variantType="body1" typotext="Due date" />
                    <TypographyCustom variantType="body1" typotext="status" />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Expected amount"
                    />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Outstanding"
                    />
                  </Stack>{" "}
                  <Stack
                    direction="row"
                    padding={1}
                    justifyContent="space-around"
                  >
                    <TypographyCustom variantType="body1" typotext="Due date" />
                    <TypographyCustom variantType="body1" typotext="status" />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Expected amount"
                    />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Outstanding"
                    />
                  </Stack>{" "}
                  <Stack
                    direction="row"
                    padding={1}
                    justifyContent="space-around"
                  >
                    <TypographyCustom variantType="body1" typotext="Due date" />
                    <TypographyCustom variantType="body1" typotext="status" />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Expected amount"
                    />
                    <TypographyCustom
                      variantType="body1"
                      typotext="Outstanding"
                    />
                  </Stack>{" "} */}

                  <Picture
                    piclink="../../Assets/HomeIcons/cheque.svg"
                    picname="asset"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
