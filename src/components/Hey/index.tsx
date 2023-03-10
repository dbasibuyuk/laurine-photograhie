import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ContainedButton } from "@/components/ContainedButton";

export const Hey = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid container paddingY={8} maxWidth={"lg"}>
        <Grid item xs={4}>
          <img src={"/hey.jpg"} height={"350px"} width={"300px"} alt={"hey"} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3" paddingBottom={4}>
            Hey!
          </Typography>
          <Typography variant="subtitle1" paddingBottom={2}>
            {`
                Moi c’est Laurine, enchantée 🙂 Passionnée de photographie
                depuis de nombreuses années, j'ai commencé à documenter mes
                voyages, pour pouvoir garder une trace de mes aventures. J'aime
                découvrir de nouvelles choses, et toucher à tout, et c'est lors
                d'une reconversion professionnelle que j'ai décidé de poursuivre
                ma passion pour la photographie et la porter encore plus loin.
                La photographie pour moi est un univers magique qui permet de
                transmettre des émotions, et de les figer dans le temps…`}
          </Typography>
          <ContainedButton variant="contained" size="large">
            A PROPOS DE MOI
          </ContainedButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
