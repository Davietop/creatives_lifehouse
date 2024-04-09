import { cn } from "@/lib/utils";

import "/app/globals.css";

import { fontSans, poppins, open_Sans } from "@/fonts";

export const metadata = {
  title: "Life House",
  description: "Created by Davietop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-white  antialiased", open_Sans.className)}>
        {children}
      </body>
    </html>
  );
}
