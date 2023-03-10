import { Grid, ImageList, ImageListItem, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import localFont from "@next/font/local";

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

const yeseva = localFont({
  src: "../../../public/fonts/YesevaOne-Regular.ttf",
  display: "swap",
});

export const RetrouvezMoi = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid container paddingTop={8} maxWidth={"lg"} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"} paddingBottom={4}>
            RETROUVEZ-MOI SUR INSTAGRAM
          </Typography>
        </Grid>
        <Grid item xs={8} paddingBottom={2}>
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
            <Typography
              variant={"h6"}
              textAlign={"center"}
              fontFamily={yeseva.style.fontFamily}
            >
              @laurineplouvierphotographie
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
