import { Button, Grid, Stack } from "@mui/material";
import { Header } from "../../organisms/Header";
import { TypographyCustom } from "../../atoms/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { MuiButton } from "../../atoms/Button";
import { ReviewCreditModal } from "../../organisms/PopupReviewCrediCash/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import theme from "../../../Themes";
// import { SideNavbar } from "../../organisms/SideNavbar";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 150,
    sortable: false,
  },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    sortable: false,
    editable: false,
  },
  {
    field: "perPayment",
    headerName: "Per payment",
    width: 150,
    sortable: false,
    editable: false,
  },
  {
    field: "termLength",
    headerName: "Term length",
    type: "number",
    width: 150,
    headerAlign: "left",
    align: "left",
    sortable: false,
    editable: false,
  },
  {
    field: "payment",
    headerName: "Payment",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    width: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, name: "Snow", type: "Jon", perPayment: 35 },
  { id: 2, name: "Lannister", type: "Cersei", perPayment: 42 },
  { id: 3, name: "Lannister", type: "Jaime", perPayment: 45 },
  { id: 4, name: "Stark", type: "Arya", perPayment: 16 },
  { id: 5, name: "Targaryen", type: "Daenerys", perPayment: null },
  { id: 6, name: "Melisandre", type: null, perPayment: 150 },
  { id: 7, name: "Clifford", type: "Ferrara", perPayment: 44 },
  { id: 8, name: "Frances", type: "Rossini", perPayment: 36 },
  { id: 9, name: "Roxie", type: "Harvey", perPayment: 65 },
];

const sxDataGrid = {
  border: "none",
  color: "fontcolor.light",
  paddingLeft: "1rem",
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#262529",
    "& :focus": {
      outline: "none",
    },
  },

  "& .MuiDataGrid-columnSeparator--sideRight": {
    display: "none",
  },

  "& .MuiDataGrid-checkboxInput": {
    color: "#727080",
  },

  "& .MuiButtonBase-root.Mui-checked": {
    "& .MuiSvgIcon-root": {
      color: "primary.main",
    },
  },

  "& .MuiDataGrid-withBorderColor": {
    border: "none",
  },

  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "#393552",
  },

  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },

  "& ::-webkit-scrollbar": {
    width: "0",
  },
};

export const SelectedContractsTemplate = () => {
  // const [reviewCredits, setReviewCredits] = useState<boolean>(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const reviewCreditshHandle = () => {
  //   setReviewCredits((prev) => !prev);
  // };

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
                headerline={"New cash kick"}
                subline={"Let’s setup a new cash kick to power your Saas"}
              />
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon fontSize="large" />}
              sx={{
                color: "fontcolor.light",
                textTransform: "capitalize",
                bgcolor: "#28272B",
                p: "10px 15px",
                borderRadius: "10px",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#28272B",
                  color: "white",
                },
              }}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </Grid>
          <Grid item lg={12}>
            <Grid
              container
              direction={"row"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Grid item lg={8}>
                <Stack bgcolor="#28272B" width="98%" borderRadius={2}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    padding={2}
                    paddingLeft={3}
                  >
                    <TypographyCustom
                      variantType="h6"
                      typotext="Your Contracts"
                      color="#E8E7F0"
                    />
                    <InfoOutlinedIcon
                      fontSize="medium"
                      sx={{ paddingLeft: "5px", color: "#727080" }}
                    />
                  </Stack>
                  <Stack direction="row" alignContent="center">
                    <Box sx={{ height: 400, width: "100%" }}>
                      <DataGrid
                        rows={rows}
                        columns={columns}
                        sx={sxDataGrid}
                        hideFooter={true}
                        disableColumnMenu
                        disableColumnFilter
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item lg={4} alignSelf="flex-start">
                <Stack
                  direction="column"
                  alignItems="space-between"
                  spacing={1}
                  padding={2}
                  bgcolor="#28272B"
                  borderRadius={2}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <TypographyCustom variantType="h5" typotext="Summary" />
                    <InfoOutlinedIcon
                      fontSize="small"
                      sx={{ color: "#727080" }}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TypographyCustom
                      variantType="body1"
                      typotext="Term"
                      color="fontcolor.light"
                    />
                    <TypographyCustom
                      variantType="body1"
                      typotext={`${12} months`}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TypographyCustom
                      variantType="body1"
                      color="fontcolor.light"
                      typotext="Selected contracts"
                    />
                    <TypographyCustom variantType="body1" typotext={0} />
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TypographyCustom
                      variantType="body1"
                      typotext="Slide to autoselect"
                      color="fontcolor.light"
                    />
                    <MuiButton
                      variant="text"
                      children="Reset"
                      sx={{
                        textTransform: "capitalize",
                        fontWeight: "bold",
                        backgroundColor: "#2D2D30",
                        color: "fontcolor.light",
                        borderRadius: "10px",
                      }}
                    />
                  </Stack>

                  {/* <div>
                      <Stack>
                        <MuiSlider
                          min={0}
                          max={880_000}
                          sx={{
                            "& .MuiSlider-thumb": {
                              borderRadius: 1,
                              color: "#6C5DD3",
                            },
                          }}
                          valueLabelDisplay="auto"
                        />
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <TypographyCustom
                          variantType="body1"
                          color="primary.main"
                          typotext={`$${(0).toFixed(2)}`}
                        />
                        <TypographyCustom
                          variantType="body2"
                          color="fontcolor.light"
                          typotext="reviewCridts of"
                        />
                        <TypographyCustom
                          variantType="body1"
                          color="#fff"
                          typotext={"$880,000.00"}
                        />
                      </Stack>
                    </div> */}

                  <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-between"
                  >
                    <TypographyCustom
                      variantType="body1"
                      color="fontcolor.light"
                      typotext="Pay back amount"
                    />
                    <TypographyCustom
                      variantType="body1"
                      typotext={`$${(0).toFixed(2)}`}
                      color="white"
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <TypographyCustom
                      variantType="body1"
                      typotext="Rate %"
                      color="fontcolor.light"
                    />
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <TypographyCustom
                        variantType="body2"
                        color="fontcolor.light"
                        typotext={`(${(0).toFixed(2)}%) `}
                      />

                      <TypographyCustom
                        variantType="body1"
                        typotext={`$${(0).toFixed(2)}`}
                      />
                    </Stack>
                  </Stack>
                  <Stack width={"100%"} height={"40px"}>
                    <div
                      style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        height: "2px",
                        backgroundColor: "#413F4D",
                      }}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <TypographyCustom
                      variantType="h6"
                      typotext="Total Payable"
                      color="fontcolor.light"
                    />
                    <TypographyCustom variantType="h5">
                      {`$${(0).toFixed(2)}`}
                    </TypographyCustom>
                  </Stack>
                  <Stack marginTop={2}>
                    <MuiButton
                      variant={"contained"}
                      children={"Submit your credit"}
                      sx={{
                        height: "2.7rem",
                        bgcolor: ` ${"primary.dark"}`,
                        color: `${"fontcolor.main"}`,
                        textTransform: "capitalize",
                        fontWeight: 600,
                        marginY: "5px",
                      }}
                      handleClick={handleOpen}
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ReviewCreditModal open={open} handleClose={handleClose} />
    </>
  );
};
