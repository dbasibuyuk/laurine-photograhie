import { Box } from "@mui/material";
import Image from "next/image";

export const ReviewCard = (props: { image: string; comment: string }) => {
  return (
    <Box>
      <Box
        width={350}
        height={500}
        position={"relative"}
        sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}
      >
        <Image
          src={props.image}
          alt={props.image}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box>{props.comment}</Box>
    </Box>
  );
};
