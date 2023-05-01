import {
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Header } from "../../organisms/Header";
import { CustomCard } from "../../molecules/Card";
import { NewCashKick } from "../../molecules/NewCashkick";
import { TypographyCustom } from "../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Picture } from "../../molecules/Picture";

const sxPaper = {
  maxHeight: "200px",
  overflowY: "scroll",
  backgroundColor: "groundcolor.light",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0",
  },

  "& .MuiTableCell-head": {
    backgroundColor: "groundcolor.darker",
    color: "fontcolor.light",
    borderBottom: "none",
    padding: 3,
    textAlign: "center",
  },
  "& .MuiTableCell-body": {
    backgroundColor: "#28272B",
    color: "fontcolor.main",
    border: "none",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    textAlign: "center",
  },
};

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
              <Paper sx={sxPaper}>
                <Table>
                  <TableHead
                    sx={{
                      position: "sticky",
                      top: 0,
                    }}
                  >
                    <TableRow>
                      <TableCell sx={{ width: "25%" }}>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Due date"
                        />
                      </TableCell>
                      <TableCell sx={{ width: "25%" }}>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Status"
                        />
                      </TableCell>
                      <TableCell sx={{ width: "25%" }}>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Expected amount"
                        />
                      </TableCell>
                      <TableCell sx={{ width: "25%" }}>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Outstanding"
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {/* <TableBody>
                    <TableRow>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Contract1"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Available"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Monthly"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext={`$${12000.25}`}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Contract1"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Available"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Monthly"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext={`$${12000.25}`}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Contract1"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Available"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Monthly"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext={`$${12000.25}`}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Contract1"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Available"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Monthly"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext={`$${12000.25}`}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Contract1"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Available"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Monthly"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext={`$${12000.25}`}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Contract1"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Available"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Monthly"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext={`$${12000.25}`}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Contract1"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Available"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext="Monthly"
                        />
                      </TableCell>
                      <TableCell>
                        <TypographyCustom
                          variantType="body2"
                          typotext={`$${12000.25}`}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody> */}
                </Table>
                <Picture
                  piclink="../../Assets/HomeIcons/cheque.svg"
                  picname="asset"
                />
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
