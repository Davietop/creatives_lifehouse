import { cn } from "@/lib/utils";

import { fontSans, poppins } from "@/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Lifehouse Creatives Digital Agency",
  description: "Created by Davietop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link href="/favicon.ico" rel="icon" sizes="any" />
      <body className={cn("bg-white  antialiased", fontSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
