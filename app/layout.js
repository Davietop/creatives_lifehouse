import { cn } from "@/lib/utils";
import "./globals.css";
import { fontSans, poppins } from "@/fonts";

export const metadata = {
  title: "LifeHouse Creatives Digital Agency",
  description: "Created by Davietop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="stylesheet"
        href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
      ></link>
      <body className={cn("bg-white  antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
