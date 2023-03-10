import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import localFont from "@next/font/local";
const pinyon = localFont({
  src: "../../public/fonts/PinyonScript-Regular.ttf",
  display: "swap",
});
const yeseva = localFont({
  src: "../../public/fonts/YesevaOne-Regular.ttf",
  display: "swap",
});
const domine = localFont({
  src: "../../public/fonts/Domine-Regular.ttf",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const colorPalette = ["#CC9280", "#BB7C7A", "#B76B78", "#D0A18F"];
  const theme = createTheme({
    typography: {
      button: {
        fontFamily: yeseva.style.fontFamily,
        backgroundColor: colorPalette[2],
        color: "white",
      },
      subtitle1: { fontFamily: domine.style.fontFamily },
      h3: { fontFamily: pinyon.style.fontFamily },
      h4: { fontFamily: yeseva.style.fontFamily },
    },
  });
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
