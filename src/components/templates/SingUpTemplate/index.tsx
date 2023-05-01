import { Grid } from "@mui/material";

interface SignUpTemplateProps {
  leftpart: React.ReactNode;
  rightpart: React.ReactNode;
}

const SignUpTemplate = (props: SignUpTemplateProps) => {
  return (
    <Grid
      container
      wrap="wrap"
      sx={{ width: { xs: "100vw", height: "100vh" } }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#393552",
          padding: { md: "2rem", xs: "1rem" },
          height: { md: "100vh" },
        }}
      >
        {props.leftpart}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#040407",
          padding: { md: "5rem", xs: "2rem" },
          height: { md: "100vh" },
          color: "white",
        }}
      >
        {props.rightpart}
      </Grid>
    </Grid>
  );
};

export default SignUpTemplate;
