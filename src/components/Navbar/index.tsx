import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Link,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useTheme } from "@mui/system";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import React from "react";
import localFont from "@next/font/local";

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
const selectedLinkStyle = {
  position: "relative",
  display: "inline-block",
  "&:before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: "-3px",
    left: "50%",
    transform: "translate(-50%,0%)",
    backgroundColor: "black",
  },
};

const yeseva = localFont({
  src: "../../../public/fonts/YesevaOne-Regular.ttf",
  display: "swap",
});

const NavbarItems = (props: { isMobile?: boolean }) => {
  const { isMobile } = props;
  const router = useRouter();
  const boxStyle = { flexGrow: 1, display: { xs: "flex" } };
  return (
    <>
      <Box
        justifyContent={"center"}
        sx={isMobile ? { marginBottom: "10px", ...boxStyle } : { ...boxStyle }}
      >
        <Link
          color={"black"}
          href={"/"}
          underline={"none"}
          sx={
            router.asPath === "/" ? { ...selectedLinkStyle } : { ...linkStyle }
          }
        >
          <Typography
            variant="h6"
            component={"h6"}
            display={"inline"}
            sx={{
              textAlign: "center",
            }}
            fontFamily={yeseva.style.fontFamily}
          >
            ACCUEIL
          </Typography>
        </Link>
      </Box>
      <Box
        justifyContent={"center"}
        sx={isMobile ? { marginBottom: "10px", ...boxStyle } : { ...boxStyle }}
      >
        <Link
          color={"black"}
          sx={
            router.asPath === "/apropos"
              ? { ...selectedLinkStyle }
              : { ...linkStyle }
          }
          href={"/portfolio"}
          underline={"none"}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{ textAlign: "center" }}
            fontFamily={yeseva.style.fontFamily}
          >
            A PROPOS
          </Typography>
        </Link>
      </Box>
      <Box
        justifyContent={"center"}
        sx={isMobile ? { marginBottom: "10px", ...boxStyle } : { ...boxStyle }}
      >
        <Link
          color={"black"}
          sx={
            router.asPath === "/portfolio"
              ? { ...selectedLinkStyle }
              : { ...linkStyle }
          }
          href={"/portfolio"}
          underline={"none"}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
            fontFamily={yeseva.style.fontFamily}
          >
            PORTFOLIO
          </Typography>
        </Link>
      </Box>
      <Box
        justifyContent={"center"}
        sx={isMobile ? { marginBottom: "10px", ...boxStyle } : { ...boxStyle }}
      >
        <Link
          color={"black"}
          sx={
            router.asPath === "/prestations"
              ? { ...selectedLinkStyle }
              : { ...linkStyle }
          }
          href={"/prestations"}
          underline={"none"}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
            fontFamily={yeseva.style.fontFamily}
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
          color={"black"}
          sx={
            router.asPath === "/contact"
              ? { ...selectedLinkStyle }
              : { ...linkStyle }
          }
          href={"/contact"}
          underline={"none"}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
            fontFamily={yeseva.style.fontFamily}
          >
            CONTACT
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export const Navbar = () => {
  const [expand, setExpand] = React.useState(false);
  const toggleAccordion = () => {
    setExpand((prev) => !prev);
  };

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container>
      <Grid item xs={12}>
        <AppBar position="absolute" color="transparent">
          <Container maxWidth="lg">
            <Toolbar>
              {greaterThanMid ? (
                <NavbarItems />
              ) : (
                <Accordion
                  sx={{
                    backgroundColor: "transparent",
                    width: "100%",
                  }}
                  elevation={0}
                  expanded={expand}
                >
                  <AccordionSummary
                    sx={{
                      backgroundColor: "transparent",
                      pointerEvents: "none",
                    }}
                    expandIcon={
                      <MenuSharpIcon
                        fontSize={"large"}
                        style={{ fill: "black" }}
                        sx={{
                          pointerEvents: "auto",
                        }}
                        color={"inherit"}
                        onClick={toggleAccordion}
                      />
                    }
                  />
                  <AccordionDetails>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <NavbarItems isMobile={true} />
                    </Box>
                  </AccordionDetails>
                </Accordion>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </Container>
  );
};
