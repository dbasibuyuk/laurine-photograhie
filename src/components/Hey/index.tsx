import { Grid, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ContainedButton } from "@/components/ContainedButton";
import { useTheme } from "@mui/system";

export const Hey = () => {
  const theme = useTheme();
  const greaterThanLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container justifyContent={"center"}>
      <Grid container paddingY={8} maxWidth={"lg"} justifyContent={"center"}>
        <Grid item xs={12} xl={4}>
          <Grid container justifyContent={"center"}>
            <img
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
              src={"/hey.jpg"}
              height={"350px"}
              width={"300px"}
              alt={"hey"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} xl={8}>
          <Typography
            variant="h3"
            paddingBottom={4}
            paddingTop={greaterThanLg ? 0 : 4}
          >
            Hey!
          </Typography>
          <Typography
            variant="subtitle1"
            paddingBottom={2}
            textAlign={"justify"}
          >
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
