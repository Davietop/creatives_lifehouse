import {
  Inter,
  Montserrat,
  Work_Sans,
  Open_Sans,
  Poppins,
  Lato,
  Roboto,
} from "next/font/google";
import { Inter as FontSans } from "next/font/google";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});
export const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
});

export const work_Sans = Work_Sans({
  weight: ["100", "200", "300", "400", "500"],
  display: "swap",
  subsets: ["latin"],
});
export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});
export const open_Sans = Open_Sans({
  weight: ["300", "400", "500"],
  display: "swap",
  subsets: ["latin"],
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
