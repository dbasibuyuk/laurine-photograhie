import { Grid } from "@mui/material";
import { Hey } from "@/components/Hey";
import { PetitApercu } from "@/components/PetitApercu";
import { RetrouvezMoi } from "@/components/RetrouvezMoi";

export default function Home() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12}>
        <div id="welcomePage" style={{ height: "100vh", width: "100vw" }} />
      </Grid>
      <Grid item xs={8}>
        <Hey />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent={"center"}
          sx={{ backgroundColor: "#CC9280" }}
        >
          <Grid item xs={8}>
            <PetitApercu />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={8}>
        <RetrouvezMoi />
      </Grid>
    </Grid>
  );
}
