import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const ContainedButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#CC9280",
  "&:hover": {
    color: "white",
    backgroundColor: "#CC9280",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
}));

export const UnderlinedButton = styled(Button)(({ theme }) => ({
  color: "white",
  borderColor: "white",
  boxSizing: "border-box",
  backgroundColor: "transparent",
  "&:hover": {
    borderColor: "white",
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
}));
