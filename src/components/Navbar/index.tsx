import { Box, Container, Grid, Link, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
export const Navbar = () => {
  const linkStyle = {
    position: "relative",

    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%,0%)",
      backgroundColor: "black",
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover:before": {
      visibility: "visible",
      width: "100%",
    },
  };
  return (
    <Container>
      <Grid item xs={12}>
        <AppBar position="fixed">
          <Container maxWidth="lg">
            <Toolbar>
              <Box
                justifyContent={"center"}
                sx={{ flexGrow: 1, display: { xs: "flex" } }}
              >
                <Link
                  color={"white"}
                  href={"/"}
                  underline={"none"}
                  sx={{ ...linkStyle }}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    display={"inline"}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    ACCUEIL
                  </Typography>
                </Link>
              </Box>
              <Box
                justifyContent={"center"}
                sx={{ flexGrow: 1, display: { xs: "flex" } }}
              >
                <Link
                  color={"white"}
                  sx={{ ...linkStyle }}
                  href={"/portfolio"}
                  underline={"none"}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{ textAlign: "center" }}
                  >
                    A PROPOS
                  </Typography>
                </Link>
              </Box>
              <Box
                justifyContent={"center"}
                sx={{ flexGrow: 1, display: { xs: "flex" } }}
              >
                <Link
                  color={"white"}
                  sx={{ ...linkStyle }}
                  href={"/portfolio"}
                  underline={"none"}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, textAlign: "center" }}
                  >
                    PORTFOLIO
                  </Typography>
                </Link>
              </Box>
              <Box
                justifyContent={"center"}
                sx={{ flexGrow: 1, display: { xs: "flex" } }}
              >
                <Link
                  color={"white"}
                  sx={{ ...linkStyle }}
                  href={"/portfolio"}
                  underline={"none"}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, textAlign: "center" }}
                  >
                    PRESTATIONS
                  </Typography>
                </Link>
              </Box>
              <Box
                justifyContent={"center"}
                sx={{ flexGrow: 1, display: { xs: "flex" } }}
              >
                <Link
                  color={"white"}
                  sx={{ ...linkStyle }}
                  href={"/portfolio"}
                  underline={"none"}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, textAlign: "center" }}
                  >
                    CONTACT
                  </Typography>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </Container>
  );
};
