import { fontSans, open_Sans, poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import Founder from "../public/timi2.png";
import Hod from "../public/preyo.png";
import CoFounder from "../public/miss2.png";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Clients from "./business_parteners";
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
    src: Hod.src,
    post: "Operations Head",
  },
];

const style2 = {
  background: "rgba(255, 255, 255,0.1)",
  backdropFilter: "blur(2.9px)",
  WebkitBackdropFilter: "blur(2.9px)",
};

export default function TeamAbout() {
  return (
    <div className="mt-10 bg-line1 bg-cover bg-center  bg-no-repeat ">
      <div>
        <div className=" flex gap-4 ml-6 md:ml-20">
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
              fontSans.className
            )}
          >
            Our Team Of Experts
          </h1>
        </div>
        <h2
          className={cn(
            "w-10/12 xs:text-xs md:text-sm mx-auto mt-6",
            fontSans.className
          )}
        >
          At Lifehouse Creatives, we believe in the power of collaboration and
          the strength of our team. Each member brings a unique set of skills,
          experiences, and passions to the table, driving our collective
          success. From creative minds shaping our strategies to technical
          experts bringing our visions to life, our diverse team is dedicated to
          exceeding expectations and delivering exceptional results. Get to know
          the faces behind our brand and discover the talent and dedication
          driving our mission forward. Welcome to our team!
        </h2>
        <div className="w-full mt-6  flex items-center h-fit  justify-around xs:flex-col  md:flex-row lg:flex-row">
          <div className="w-3/12 xs:w-7/12 sm:w-6/12  md:w-4/12 lg:w-4/12 xl:w-3/12 img">
            <Image src={Founder.src} width={400} height={400} alt="helo" />
          </div>
          <div
            className={cn(
              "w-6/12 mt-10  text-sm xs:text-xs sm:text-sm  info md:text-xs lg:text-sm  xs:w-10/12 md:w-6/12 lg:w-6/12",
              fontSans.className
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
            commodo sapien. Pellentesque porta lacus purus, id consectetur ex
            sodales sit amet. Sed in urna diam. Curabitur mattis, sem ut semper
            varius, dolor risus pretium ante, in bibendum leo libero nec magna.
            Proin dignissim eu augue varius posuere. Donec ipsum massa, finibus
            nec sem accumsan, finibus suscipit massa. Cras mollis consequat diam
            nec blandit. Sed efficitur ornare sodales. Integer pellentesque
            justo quis neque tincidunt, quis convallis turpis sagittis. Nunc ac
            magna efficitur, cursus sem in, vestibulum sapien. Sed id venenatis
            massa, rutrum dapibus nisi. Sed placerat nunc vel enim gravida,
            vitae semper erat malesuada. Praesent convallis maximus convallis.
            Aenean maximus egestas sapien ut tempus. Suspendisse imperdiet odio
            non varius tempor. Suspendisse quis odio in libero sagittis
            imperdiet non id leo.
          </div>
        </div>{" "}
        <div className="w-full mt-6  flex items-center h-fit  justify-around xs:flex-col md:flex-row lg:flex-row">
          <div className="w-3/12 md:hidden xs:w-7/12 sm:w-6/12  md:w-4/12 lg:w-4/12 xl:w-3/12 img  ">
            <Image src={Hod.src} width={400} height={400} alt="helo" />
          </div>
          <div
            className={cn(
              "w-6/12 mt-10  text-sm xs:text-xs sm:text-sm  info md:text-xs lg:text-sm  xs:w-10/12 md:w-6/12 lg:w-6/12",
              fontSans.className
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
            commodo sapien. Pellentesque porta lacus purus, id consectetur ex
            sodales sit amet. Sed in urna diam. Curabitur mattis, sem ut semper
            varius, dolor risus pretium ante, in bibendum leo libero nec magna.
            Proin dignissim eu augue varius posuere. Donec ipsum massa, finibus
            nec sem accumsan, finibus suscipit massa. Cras mollis consequat diam
            nec blandit. Sed efficitur ornare sodales. Integer pellentesque
            justo quis neque tincidunt, quis convallis turpis sagittis. Nunc ac
            magna efficitur, cursus sem in, vestibulum sapien. Sed id venenatis
            massa, rutrum dapibus nisi. Sed placerat nunc vel enim gravida,
            vitae semper erat malesuada. Praesent convallis maximus convallis.
            Aenean maximus egestas sapien ut tempus. Suspendisse imperdiet odio
            non varius tempor. Suspendisse quis odio in libero sagittis
            imperdiet non id leo.
          </div>
          <div className="w-3/12 xs:hidden md:flex xs:w-7/12 sm:w-6/12  md:w-4/12 lg:w-4/12 xl:w-3/12 img">
            <Image src={Hod.src} width={400} height={400} alt="helo" />
          </div>
        </div>{" "}
        <div className="w-full mt-6  flex items-center h-fit  justify-around xs:flex-col md:flex-row lg:flex-row">
          <div className="w-3/12 xs:w-7/12 sm:w-6/12  md:w-4/12 lg:w-4/12 xl:w-3/12 img">
            <Image src={CoFounder.src} width={400} height={400} alt="helo" />
          </div>
          <div
            className={cn(
              "w-6/12 mt-10  text-sm xs:text-xs sm:text-sm  info md:text-xs lg:text-sm  xs:w-10/12 md:w-6/12 lg:w-6/12",
              fontSans.className
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
            commodo sapien. Pellentesque porta lacus purus, id consectetur ex
            sodales sit amet. Sed in urna diam. Curabitur mattis, sem ut semper
            varius, dolor risus pretium ante, in bibendum leo libero nec magna.
            Proin dignissim eu augue varius posuere. Donec ipsum massa, finibus
            nec sem accumsan, finibus suscipit massa. Cras mollis consequat diam
            nec blandit. Sed efficitur ornare sodales. Integer pellentesque
            justo quis neque tincidunt, quis convallis turpis sagittis. Nunc ac
            magna efficitur, cursus sem in, vestibulum sapien. Sed id venenatis
            massa, rutrum dapibus nisi. Sed placerat nunc vel enim gravida,
            vitae semper erat malesuada. Praesent convallis maximus convallis.
            Aenean maximus egestas sapien ut tempus. Suspendisse imperdiet odio
            non varius tempor. Suspendisse quis odio in libero sagittis
            imperdiet non id leo.
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex gap-4 ml-6 md:ml-20">
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
</div> */
}
