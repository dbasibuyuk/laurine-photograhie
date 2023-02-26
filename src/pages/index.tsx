import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Box, Container, Grid, Toolbar} from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
          <Grid container>
              <Container>
                  <Grid item xs={12} >
                      <AppBar position="fixed">
                          <Container maxWidth="lg">
                          <Toolbar >
                              {/*<IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mr: 2 }}
                          >
                              <MenuIcon />
                          </IconButton>*/}
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign: "center" }}>
                                  ACCUEIL
                              </Typography>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign: "center" }}>
                                  A PROPOS
                              </Typography>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign: "center" }}>
                                  PORTFOLIO
                              </Typography>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign: "center" }}>
                                  PRESTATIONS
                              </Typography>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign: "center" }}>
                                  CONTACT
                              </Typography>
                          </Toolbar>
                          </Container>
                      </AppBar>
                  </Grid>
              </Container>
              <div id="welcomePage" style={{height:"100vh", width: "100vw"}} />
          </Grid>
  )
}
