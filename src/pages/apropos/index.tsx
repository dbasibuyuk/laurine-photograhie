import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { AutoPortrait } from "@/components/AutoPortrait";
import { Review } from "@/components/Review";

const Apropos = () => {
  return (
    <Grid container marginTop={16} justifyContent={"center"}>
      <Grid item xs={8} paddingBottom={8}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={4}>
            <Box
              width={350}
              height={500}
              position={"relative"}
              sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
            >
              <Image
                src={"/hey.jpg"}
                alt={"hey"}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Typography
              variant="subtitle1"
              paddingBottom={2}
              textAlign={"justify"}
            >
              {`
                Passionnée de photographie depuis de nombreuses années, j'ai commencé à documenter mes voyages, pour pouvoir garder une trace de mes aventures. J'aime découvrir de nouvelles choses, et toucher à tout
C'est lors d'une reconversion professionnelle que j'ai décidé de poursuivre ma passion pour la photographie et la porter encore plus loin.
La photographie est un univers magique qui permet de transmettre des émotions, et de les figer dans le temps. 
Je me développe dans différents domaines, que ce soit pour des événements de vie, des mariages, des regroupements de famille, des shootings en couple, en ami.es, en solo ... Mais aussi pour aider les femmes à se sentir à l'aise et les aider à accepter leur corps, leur image à travers la photographie.Vous pouvez retrouver tout mon travail sur les réseaux sociaux (instagram et facebook), mais aussi sur ce portfolio. L’émotion et l’histoire que je transmets à travers mes photos vous plaisent-elles ? N'hésitez pas à me contacter pour discuter d'un éventuel projet ensemble :-)`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <AutoPortrait />
      </Grid>
      <Grid item xs={8}>
        <Review />
      </Grid>
    </Grid>
  );
};

export default Apropos;
