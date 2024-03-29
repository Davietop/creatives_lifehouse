const styles = {
  background: "linear-gradient(to left, #042431 , rgba( 255, 255, 255, 0 ))",
};

import { Button } from "@nextui-org/react";
import { fontSans, poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

export default function HeroSectionsm() {
  return (
    <div className="md:hidden lg:hidden xl:hidden 2xl:hidden bg-bg_img h-[450px] bg-center bg-cover mt-2 shadow">
      <div
        style={styles}
        className="h-[450px] flex items-center flex-col justify-center "
      >
        <h2
          className={cn(
            "text-2xl w-fit p-1 text-white font-bold tracking-[2px] text-center",
            poppins.variable
          )}
        >
          Discover the Force Behind Impactful Digital Experinces.
        </h2>

        <p className="text-white w-fit p-4 text-center">
          Learn how we combine CRM and content to deliver excellent sales and
          marketing solutions.
        </p>

        <Button
          // variant="flat"
          className={cn(
            "bg-[#f15a24] w-fit p-6 font-[500] text-sm text-white mt-4",
            fontSans.variable
          )}
        >
          Get Started.
        </Button>
      </div>
    </div>
  );
}
