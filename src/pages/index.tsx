import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Toolbar,
} from "@mui/material";
import { SimpleSlider } from "@/components/SimpleSlider";
import { Navbar } from "@/components/Navbar";
import Typography from "@mui/material/Typography";
const inter = Inter({ subsets: ["latin"] });
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const images = [
  "/_1001242.jpg",
  "/_1023525.jpg",
  "/_1024845.jpg",
  "/P1045620-00002.jpg",
  "/P1237359-00026.jpg",
  "/P1342779-00137.jpg",
  "P1396530-00015.jpg",
  "P1397480-00001.jpg",
  "P1409653-00001-3.jpg",
  "P1410351-00003.jpg",
];

export default function Home() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12}>
        <div id="welcomePage" style={{ height: "100vh", width: "100vw" }} />
      </Grid>
      <Grid item xs={8}>
        <Grid container justifyContent={"center"}>
          <Grid container paddingTop={8} maxWidth={"lg"}>
            <Grid item xs={4}>
              <img
                src={"/hey.jpg"}
                height={"350px"}
                width={"300px"}
                alt={"hey"}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4" paddingBottom={4}>
                Hey!
              </Typography>
              <Typography variant="subtitle1" paddingBottom={2}>
                Moi c’est Laurine, enchantée 🙂 Passionnée de photographie
                depuis de nombreuses années, j'ai commencé à documenter mes
                voyages, pour pouvoir garder une trace de mes aventures. J'aime
                découvrir de nouvelles choses, et toucher à tout, et c'est lors
                d'une reconversion professionnelle que j'ai décidé de poursuivre
                ma passion pour la photographie et la porter encore plus loin.
                La photographie pour moi est un univers magique qui permet de
                transmettre des émotions, et de les figer dans le temps…
              </Typography>
              <Button variant="outlined" size="large">
                A PROPOS DE MOI
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid
            container
            paddingTop={8}
            maxWidth={"lg"}
            justifyContent={"center"}
          >
            <Grid item xs={12}>
              <Typography variant="h4" textAlign={"center"} paddingBottom={4}>
                Un petit aperçu...
              </Typography>
            </Grid>
            <Grid item xs={12} paddingBottom={2}>
              <SimpleSlider images={images} />
            </Grid>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ChevronRightOutlinedIcon />}
            >
              SEE MORE
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid
            container
            paddingTop={8}
            maxWidth={"lg"}
            justifyContent={"center"}
          >
            <Grid item xs={12}>
              <Typography variant="h4" textAlign={"center"} paddingBottom={4}>
                RETROUVEZ-MOI SUR INSTAGRAM
              </Typography>
            </Grid>
            <Grid item xs={12} paddingBottom={2}>
              <ImageList cols={3}>
                {images.slice(0, 9).map((item, i) => (
                  <ImageListItem key={`${item}{$i}`}>
                    <img src={item} alt={item} loading="lazy" />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
            <Grid item xs={12}>
              <Link
                color={"inherit"}
                href="https://www.instagram.com/laurineplouvierphotographie/"
                target="blank"
              >
                <Typography variant={"h6"} textAlign={"center"}>
                  @laurineplouvierphotographie
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
