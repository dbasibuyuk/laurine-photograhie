import { Container, Grid, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <AppBar position="fixed">
          <Container maxWidth="lg">
            <Toolbar>
              {/*<IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mr: 2 }}
                          >
                              <MenuIcon />
                          </IconButton>*/}
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                ACCUEIL
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                A PROPOS
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                PORTFOLIO
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                PRESTATIONS
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                CONTACT
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </Container>
  );
};
