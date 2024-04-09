import { fontSans, open_Sans, poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import Founder from "../public/timi.png";
import Hod from "../public/fiyin_1_test.png";
import CoFounder from "../public/miss.png";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
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
    name: "Oyatoye Fiyinfoluwa",
    src: CoFounder.src,
    post: "Operations Head",
  },
];

const style2 = {
  background: "rgba(255, 255, 255,0.1)",
  backdropFilter: "blur(10.9px)",
  WebkitBackdropFilter: "blur(10.9px)",
};

export default function TeamAbout() {
  return (
    <div>
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
            "decoration-4 font-[700]   text-center sm:text-lg xs:text-base md:text-xl mt-10",
            poppins.variable
          )}
        >
          Our Team Of Experts
        </h1>
      </div>

      <h2
        className={cn(
          "w-10/12 xs:text-xs md:text-base mx-auto mt-6",
          open_Sans.variable
        )}
      >
        At Lifehouse Creatives, we believe in the power of collaboration and the
        strength of our team. Each member brings a unique set of skills,
        experiences, and passions to the table, driving our collective success.
        From creative minds shaping our strategies to technical experts bringing
        our visions to life, our diverse team is dedicated to exceeding
        expectations and delivering exceptional results. Get to know the faces
        behind our brand and discover the talent and dedication driving our
        mission forward. Welcome to our team!
      </h2>

      <div className="relative mt-10 p-4 flex items-center justify-center gap-7 flex-wrap">
        {members.map((data, i) => {
          return (
            <div key={i}>
              <Card
                style={style2}
                className="content  xs:w-[350px]  md:w-[400px] "
              >
                <div className="content-overlay"></div>
                <Image
                  className="object-cover bg-bg_members_6 bg-cover bg-center bg-no-repeat"
                  src={data.src}
                  alt="hello"
                  width={400}
                  height={400}
                />

                <CardContent className="content-details fadeIn-bottom relative z-10">
                  <h3 className="content-title">{data.name}</h3>
                  <p className="content-text">{data.post}</p>
                </CardContent>

                <CardFooter className="text-center mt-4 xs:text-xs md:text-sm">
                  Mauris eu sagittis tortor. Integer faucibus sed ipsum at
                  lacinia. Curabitur semper erat neque, eu venenatis diam tempus
                  a.
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
