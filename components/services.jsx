import { cn } from "@/lib/utils";
import { fontSans, poppins } from "@/fonts";
import { CardWithForm } from "./card";
import Email from "../public/email.webp";
import Digital from "../public/automation3.webp";
import Crm from "../public/crm.webp";

const card = [
  {
    title: "Digital Marketing.",
    description:
      "Optimize outreach, amplify brand visibility, and enhance engagement.",
    content:
      "Drive traffic and improve conversion rate through SEO, PPC, social media and optimize marketing strategies for continued success.",
    src: Digital,
  },
  {
    title: "CRM Implementation.",
    description: "Enhancing relationships, driving business growth.",
    content:
      "We implement an all-inclusive CRM system that helps you manage your business contact, pipeline, funnel and monitor marketing performance",
    src: Crm,
  },
  {
    title: "Marketing Automation & Sales Management.",
    description: "Automate engagement for personalized outreach.",
    content:
      "Levearge automation to add leads to pipelines, tag contacts, send automated email sequences and monitor replies within your CRM",
    src: Email,
  },
];

const style2 = {
  background: "rgba(255, 255, 255,0.1)",
  backdropFilter: "blur(10.9px)",
  WebkitBackdropFilter: "blur(10.9px)",
};

export default function Services() {
  return (
    <div
      className={cn(
        "relative mx-auto    bg-right bg-contain bg-no-repeat",
        fontSans.variable
      )}
    >
      <div style={style2} className="h-fit pt-10 ">
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
            Our Services
          </h1>
        </div>

        <div className="mt-8 flex-col text-center flex items-center text-xl justify-center w-10/12 mx-auto sm:text-sm xs:text-xs md:text-sm ">
          <p className="">
            Our insourced team help businesses with CRM operations. Marketing
            Tech implementation and multi-channel digital marketing
          </p>
          <p className="">
            In Simple terms: We build and provide content for Websites, CRM and
            Email Marketing System
          </p>
        </div>
        <div className="flex items-center justify-center relative z-10 flex-wrap gap-8 mt-10">
          {card.map((data, arr, i) => {
            return <CardWithForm key={Math.random()} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
