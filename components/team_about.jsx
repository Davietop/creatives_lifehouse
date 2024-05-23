import { fontSans, open_Sans, poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import Founder from "../public/timi2.png";
import Hod from "../public/fiyin_Pic.png";
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
    name: "Samuel Oyatoye ",
    src: Hod.src,
    post: "Sales & Marketing Director",
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
      <div style={style2}>
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
            "w-10/12 xs:text-xs font-bold md:text-sm mx-auto mt-6",
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
              "w-6/12 mt-10 font-bold text-sm xs:text-xs xs:text-center md:text-left sm:text-sm  info md:text-xs lg:text-sm  xs:w-10/12 md:w-6/12 lg:w-6/12",
              fontSans.className
            )}
          >
            Timi is a Multi-Certified Inbound Marketing & Sales Management
            Specialist who has helped various founders, marketers, and sales
            teams optimize their marketing, sales, and customer service
            pipelines through digital marketing strategy, revenue operations
            strategies, and CRM implementation.
            <br /> <br /> He delights in helping aspirational Small and Medium
            Enterprises (SMEs) transform the way they find, convert and keep
            customers leveraging digital technologies. In 2020, he began his
            digital marketing journey and has since scaled across the length and
            breadth of the industry to arrive at a position where he now assists
            businesses with revenue operations services on Salesforce,
            GoHighLevel, Zoho, and HubSpot CRM platforms. Outside work, he picks
            interest in leadership development and sports.
          </div>
        </div>{" "}
        <div className="w-full mt-6  flex items-center h-fit  justify-around xs:flex-col md:flex-row lg:flex-row">
          <div className="w-3/12 md:hidden xs:w-7/12 sm:w-6/12  md:w-4/12 lg:w-4/12 xl:w-3/12 img  ">
            <Image src={Hod.src} width={400} height={400} alt="helo" />
          </div>
          <div
            className={cn(
              "w-6/12 mt-10 font-bold  text-sm xs:text-xs sm:text-sm xs:text-center md:text-left  info md:text-xs lg:text-sm  xs:w-10/12 md:w-6/12 lg:w-6/12",
              fontSans.className
            )}
          >
            Fiyin is a Content Genius! FOr the past four years, he has dedicated
            his life to writing copies specially engineered to make business
            success a reality. He uses sorytelling with copywriting techniques
            to drive sales, and he has enjoyed much success doing that by
            helping several SMEs and big brands to write copies that has driven
            intense rates of conversion. <br /> <br />
            On the content and conversion side of things, he is the lead sales
            and marketing strategist at Lifehouse Creatives. Outside work, he is
            an avid reader and he is fascinated by the world of engineering.
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
              "w-6/12 mt-10 font-bold  text-sm xs:text-xs sm:text-sm xs:text-center md:text-left  info md:text-xs lg:text-sm  xs:w-10/12 md:w-6/12 lg:w-6/12",
              fontSans.className
            )}
          >
            Praise is a creative whose passion finds expression in words,
            designs, space arrangements, brand imagery, and ideas. She leverages
            her creativity to craft compelling content that engages various
            audiences and uses her expertise in media to infuse her work with a
            unique touch.
            <br />
            <br /> As a Creative Director, Praise is driven by a desire to
            harness innovative ideas and craft lasting solutions using visual
            design, creative and copywriting, and social media management.
            Outside work, she is an avid reader who likes to explore the soul of
            music. When she delves into the goodies of the internet she is
            seeking to understand the human emotions or admiring the beauty of
            nature.
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
