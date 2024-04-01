const styles = {
  background: "linear-gradient(to left, #042431 , rgba( 255, 255, 255, 0 ))",
};

import { Button } from "@nextui-org/react";
import { fontSans, poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

export default function HeroSectionsm() {
  return (
    <div className="md:hidden lg:hidden xl:hidden 2xl:hidden bg-bg_img h-[450px] bg-center bg-cover shadow">
      <div
        style={styles}
        className="h-[450px] flex items-center flex-col justify-center "
      >
        <h2
          className={cn(
            "xs:text-lg sm:text-xl text-2xl w-11/12 p-1 text-white font-bold tracking-[2px] text-center",
            poppins.variable
          )}
        >
          Discover the Force Behind Impactful Digital Experinces.
        </h2>

        <p className="text-white w-10/12 p-4 text-center">
          Learn how we combine CRM and content to deliver excellent sales and
          marketing solutions.
        </p>

        <Button
          // variant="flat"
          className={cn(
            "bg-[#f15a24] w-fit xs:p-4 p-6 font-[500] text-sm xs:text-xs text-white mt-1",
            fontSans.variable
          )}
        >
          Get Started.
        </Button>
      </div>
    </div>
  );
}

function add() {
  const num1 = 1;
  const num2 = 3;

  const add_value = num1 + num2;
  return add_value;
}

add();