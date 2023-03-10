import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SimpleSlider } from "@/components/SimpleSlider";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { UnderlinedButton } from "@/components/ContainedButton";

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

export const PetitApercu = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid container paddingY={8} maxWidth={"lg"} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            textAlign={"center"}
            color={"white"}
            paddingBottom={4}
          >
            Un petit aperçu...
          </Typography>
        </Grid>
        <Grid item xs={12} paddingBottom={2}>
          <SimpleSlider images={images} />
        </Grid>
        <UnderlinedButton
          variant="outlined"
          size="large"
          endIcon={<ChevronRightOutlinedIcon />}
        >
          SEE MORE
        </UnderlinedButton>
      </Grid>
    </Grid>
  );
};
