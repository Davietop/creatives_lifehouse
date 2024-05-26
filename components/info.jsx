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
      " We are a team of sales and marketing experts providing scalable sales and marketing strategies that generate leads, drive engagement, conversions, and remarkable revenue.We work as or with your internal marketing team to build and implement thorough up-front digital strategies either continuously or instantaneously in a consulting capacity",
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
      {card.map((data, i) => {
        return (
          <Card
            key={i}
            style={style}
            className="container2 border-2  shadow   bg-cover bg-center bg-no-repeat xs:w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 rounded-xl shadow  "
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
      <Card
        style={style}
        className="container2 border-2  shadow   bg-cover bg-center bg-no-repeat xs:w-11/12 sm:w-10/12  md:w-7/12 lg:w-5/12 xl:w-4/12  rounded-xl shadow  "
      >
        <div className="circle2 "></div>
        <CardHeader>
          <div className="flex md:text-base xs:text-sm items-center justify-center flex-col gap-4 xl:gap-2">
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
          className=" text-center  xs:text-xs sm:text-xs  md:text-sm "
        >
          <div className="flex flex-col">
            <p>
              {" "}
              By leveraging the most effective digital technologies, we ensure
              your ongoing investment generates remarkable ROI.
            </p>
            <div className="text-left list mt-6">
              <ul>
                <li>
                  <span>CRM Setup & Management</span>
                </li>
                <li>
                  <span>Email Marketing</span>
                </li>
                <li>
                  <span>Sales and Marketing Strategy</span>
                </li>
                <li>
                  <span>Marketing Automation</span>
                </li>
                <li>
                  <span>Sales Funnel Development</span>
                </li>
                <li>
                  <span>Website & Landing Page Design</span>
                </li>
                <li>
                  <span>SEO & Content Marketing</span>
                </li>
                <li>
                  <span>Social Media Marketing</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
