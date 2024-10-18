const styles = {
  background: "linear-gradient(to right, #042431 , rgba( 255, 255, 255, 0 ))",
};

// import { Button } from "./ui/button";
import { fontSans, poppins, lato } from "@/fonts";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      style={styles}
      className="relative mx-auto flex flex-col justify-center w-full h-[500px] md:h-[400px]  lg:h-[500px] xl:h-[550px]  "
    >
      <div className="md:h-[400px] lg:h-[500px] xl:h-[550px]  flex  flex-col justify-center gap-6 md:absolute md:left-[60px] md:top-[-10px] lg:absolute lg:left-[80px] xl:absolute xl:left-[80px]  ">
        <h2
          className={cn(
            "md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl md:w-[450px] lg:w-[500px] xl:w-[600px] text-white font-bold leadng-loose tracking-[2x]",
            poppins.variable
          )}
        >
          Discover the Force Behind Impactful Digital Experiences.
        </h2>

        <p className={cn("text-white lg:w-9/12 md:w-7/12", fontSans.variable)}>
          Learn how we combine CRM and content to deliver excellent sales and
          marketing results.
        </p>

        <Button
          // variant="flat"
          className={cn(
            "bg-[#9e591b] w-fit p-6 font-[500] text-sm text-white",
            fontSans.variable
          )}
        >
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
