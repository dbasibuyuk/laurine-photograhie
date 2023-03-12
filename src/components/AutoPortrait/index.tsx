import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AutoPortraitSlider } from "@/components/SimpleSlider";

const images = [
  "/apropos/P1044885-00002.jpg",
  "/apropos/P1044984-00003.jpg",
  "/apropos/P1045094-00003.jpg",
  "/apropos/P1046150-00015.jpg",
  "/apropos/P1056295-00008.jpg",
  "/apropos/P1250602-00002.jpg",
  "/apropos/P1250788-00002.jpg",
  "/apropos/P1250886-00002.jpg",
  "/apropos/P1260880-00002.jpg",
  "/apropos/P1330789-00001.jpg",
];

export const AutoPortrait = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ backgroundColor: "#CC9280" }}
    >
      <Grid item xs={8}>
        <Grid container justifyContent={"center"} paddingY={8}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              textAlign={"center"}
              color={"white"}
              paddingBottom={4}
            >
              Autoportraits
            </Typography>
          </Grid>
          <Grid item xs={12} className={"apropos"} paddingBottom={4}>
            <AutoPortraitSlider images={images} />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              borderRadius: "4px",
            }}
            padding={2}
          >
            <Typography
              color={"white"}
              variant="subtitle1"
              paddingBottom={2}
              textAlign={"center"}
              sx={{ filter: "none" }}
            >
              {`J'expérimente l'autoportrait depuis un moment déjà; cela m'a beaucoup aidé dans ma confiance en moi et d'accepter plus facilement mon image et mon corps.
Tout le monde mérite d’avoir un regard sur soi plus doux et bienveillant. Cela peut paraître compliqué pour certaines personnes. C’est pour cela que je souhaite aider grâce à la photo, à vous voir différemment. A travers mon œil, vous allez découvrir une nouvelle façon de vous regarder. `}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
