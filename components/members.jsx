import { cn } from "@/lib/utils";
import { fontSans, roboto, open_Sans } from "@/fonts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Image } from "@nextui-org/react";
import Founder from "../public/timi.webp";
import Hod from "../public/fiyin_Pic.webp";
import CoFounder from "../public/miss.webp";

import Link from "next/link";

// const styles = {
//   background: "rgba(0, 0, 0, 0.35)",
//   backdropFilter: "blur(5.9px)",
//   WebkitBackdropFilter: "blur(5.9px)",
// };

const styles = {
  background: "rgba( 255, 255, 255, 1 )",

  backdropFilter: "blur( 20px )",
  WebkitBackdropFilter: "blur( 20px )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
};

const members = [
  {
    name: "Timilehin Samson",
    src: Founder.src,
    post: "Team Lead",
  },
  {
    name: "Praise Eso",
    src: CoFounder.src,
    post: "Creative Director",
  },
  {
    name: "Samuel Oyatoye ",
    src: Hod.src,
    post: "Sales & Marketing Director",
  },
];

export default function Members() {
  return (
    <div
      className={cn(
        "bg-line1 bg-cover bg-center bg-no-repeat mt-6 pt-10 pb-10",
        fontSans.className
      )}
    >
      <div className="flex gap-4 ml-6 md:ml-20">
        <div className="flex mt-10 items-center justify-center ">
          <div
            style={{
              backgroundImage:
                "linear-gradient(to left, #283d3b, #203d29, #30390b, #4c2d00, #670c04)",
            }}
            className="h-[2px]  w-[50px] "
          ></div>
          <div
            className=""
            style={{
              borderLeft: "2px solid green",
              height: "18px",
            }}
          ></div>
        </div>
        <h1
          className={cn(
            "decoration-4 font-[700]   text-center sm:text-lg xs:text-base md:text-xl mt-10"
          )}
        >
          Our Team Of Experts
        </h1>
      </div>

      <div className="mt-4  text-xl  w-10/12 mx-auto sm:text-lg xs:text-xs md:text-lg  ">
        <p>The Team Behind The Brilliance </p>
      </div>

      <div className="relative mt-10 p-4 flex items-center justify-center gap-7 flex-wrap">
        {members.map((data, i) => {
          return (
            <Card
              key={i}
              className="content border-1 border-[#121b1b]  bg-bg_members_6 bg-cover bg-bottom bg-no-repeat   h-[350px] w-fit  "
            >
              <div className="content-overlay"></div>
              <Image
                className="object-cover"
                src={data.src}
                alt="hello"
                width={300}
                height="fit"
              />

              <CardContent className="content-details fadeIn-bottom relative z-10">
                <h3 className="content-title">{data.name}</h3>
                <p className="content-text">{data.post}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
