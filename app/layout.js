import { cn } from "@/lib/utils";
import "./globals.css";
import { fontSans, poppins } from "@/fonts";

export const metadata = {
  title: "Life House",
  description: "Created by Davietop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          " bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
