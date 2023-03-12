import { Grid } from "@mui/material";
import { ReviewCard } from "@/components/ReviewCard";

export const Review = () => {
  return (
    <Grid container justifyContent={"center"} paddingY={8}>
      <ReviewCard image={"/hey.jpg"} comment={"ahmetjhdfgjkfd"} />
    </Grid>
  );
};
