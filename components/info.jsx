import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import identity from "../public/who_we.png";
import Service from "../public/what_we .png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fontSans, open_Sans, poppins } from "@/fonts";

const style = {
  /* From https://css.glass */
  background: "rgba(255, 255, 255, 1)",
  // borderRadius: 16px;
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(20px)",

  border: "1px solid rgba(255, 255, 255, 0.3)",
};

const card = [
  {
    title: "Who we are?",
    content:
      " We are a cohesive team of digital marketers boasting extensive expertise in sales management facilitated by CRM utilization, proficient web development skills, and strategic content marketing proficiency",
    src: identity,
  },
];
export default function Information() {
  return (
    <div
      className={cn(
        " flex items-center justify-center relative z-10 flex-wrap gap-8 mt-16",
        fontSans.className
      )}
    >
      <Card
        style={style}
        className="container2 border-2  shadow   bg-cover bg-center bg-no-repeat  xs:w-[320px] sm:w-[320px] md:w-[350px] xl:w-[400px] rounded-xl shadow  "
      >
        <div className="circle2 "></div>
        <CardHeader>
          <div className="flex md:text-base xs:text-sm items-center justify-center flex-col gap-6">
            <CardTitle className="text-center font-bold">What we do?</CardTitle>
            <CardDescription>
              <Image src={Service.src} alt="image" width={200} height={200} />
            </CardDescription>
          </div>
          <CardDescription className="xs:text-xs md:text-sm font-bold text-center"></CardDescription>
        </CardHeader>
        <CardContent
          style={{
            position: "relative",
            "z-index": "100px",
          }}
          className="  xs:text-xs sm:text-xs  md:text-sm "
        >
          <p>
            We strive for remarkable ROI, ensuring your ongoing investment in
            our effective solutions.
          </p>
          <div
            className={cn(
              "flex xs:text-xs sm:text-xs md:text-xs justify-around items-center mt-4",
              open_Sans.className
            )}
          >
            <ol
              style={{
                listStyle: "dotted",
              }}
            >
              <li>Email Marketing</li>
              <li>Email Marketing</li>
              <li>Email Marketing</li>
            </ol>
            <ul
              style={{
                listStyle: "dotted",
              }}
            >
              <li>Email Marketing</li>
              <li>Email Marketing</li>
              <li>Email Marketing</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      {card.map((data, i) => {
        return (
          <Card
            key={i}
            style={style}
            className="container2 border-2  shadow   bg-cover bg-center bg-no-repeat  xs:w-[320px] sm:w-[320px] md:w-[350px] xl:w-[400px] rounded-xl shadow  "
          >
            <div className="circle2 "></div>
            <CardHeader>
              <div className="flex md:text-base xs:text-sm items-center justify-center flex-col gap-6">
                <CardTitle className="text-center font-bold">
                  {data.title}
                </CardTitle>
                <CardDescription>
                  <Image src={data.src} alt="image" width={200} height={200} />
                </CardDescription>
              </div>
              <CardDescription className="xs:text-xs md:text-sm font-bold text-center">
                {data.description}
              </CardDescription>
            </CardHeader>
            <CardContent
              style={{
                position: "relative",
                "z-index": "100px",
              }}
              className=" text-center  xs:text-xs sm:text-xs  md:text-sm "
            >
              {data.content}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
