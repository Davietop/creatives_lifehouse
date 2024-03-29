const styles = {
  background: "linear-gradient(to right, #042431 , rgba( 255, 255, 255, 0 ))",
};

// import { Button } from "./ui/button";
import { fontSans, poppins, lato } from "@/fonts";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

import { Button } from "@nextui-org/react";

export default function HeroSection() {
  return (
    <div
      style={styles}
      className="relative mx-auto flex flex-col justify-center w-full h-[600px] md:h-[400px]  lg:h-[500px] xl:h-[600px]  "
    >
      <div className="md:h-[400px] lg:h-[500px] xl:h-[600px]  flex  flex-col justify-center gap-6 md:absolute md:left-[80px] md:top-[-10px] lg:absolute lg:left-[100px] xl:absolute xl:left-[150px]  ">
        <h2
          className={cn(
            "md:text-3xl lg:text-4xl xl:text-5xl md:w-[450px] lg:w-[500px] xl:w-[650px] text-white font-bold leadng-loose tracking-[2px]",
            poppins.variable
          )}
        >
          Discover the Force Behind Impactful Digital Experinces.
        </h2>

        <p className={cn("text-white lg:w-9/12 md:w-7/12", fontSans.variable)}>
          Learn how we combine CRM and content to deliver excellent sales and
          marketing solutions.
        </p>

        <Button
          // variant="flat"
          className={cn(
            "bg-[#9e591b] w-fit p-6 font-[500] text-sm text-white",
            fontSans.variable
          )}
        >
          Get Started.
        </Button>
      </div>
    </div>
  );
}
