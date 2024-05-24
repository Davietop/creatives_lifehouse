import React, { useEffect, useState } from "react";
// import { Accordion, AccordionItem } from "@nextui-org/react";
import { fontSans, roboto, open_Sans, poppins } from "@/fonts";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";

import { Button } from "@nextui-org/react";
import search from "../public/search.png";
import general from "../public/general.png";
import customer_service from "../public/customer_service.png";
import pricing from "../public/price-tag (4).png";
import pricing2 from "../public/pricing.png";
import phone from "../public/phone.png";
import mail from "../public/message.png";
import { AccordionDemo } from "./accordion";

const style2 = {
  background: "rgba(255, 255, 255,0.1)",
  backdropFilter: "blur(5.9px)",
};

const question = [
  {
    id: "general",
    question: "What services does Lifehouse Creatives provide?",
    answer:
      "We provide digital marketing and sales management services for small and mid-sized companies, and our close-knit team also works well with early stage entrepreneurs and solopreneurs.",
  },
  {
    id: "service",
    question:
      "What form of Digital Marketing and Sales Management services do you provide?",
    answer:
      "Our clients trust us to handle a wide-array of their needs including CRM Implementation and Management, Marketing Automations, Lead Generation and Conversion Rate Optimization, Web Design and Custom Web Development, Content Marketing and SEO, and Social Media Marketing. We believe our operating model best serves our clients interests.  The difference between the service we provide and the “other guys” is that we are business people that use digital marketing and sales management to grow your business. When we are implementing your digital strategy, we focus on how your digital infrastructures such as CRM, websites, and socials will generate revenue and then we take a conversion-oriented approach to design and make sure that your website is technically configured to rank for the keywords that your business operates within. Our projects are smooth, well laid out, professional, minimalistic, conversion-oriented, SEO-optimized, and designed to grow your business by generating leads and sales",
  },
  {
    id: "service",
    question: "What Industries do you serve?",
    answer:
      "Our ideal client usually come from B2B, B2C, and E-Commerce brands across different industries that include but not limited to Retail, Ecommerce, Information Technology, FInancial Services, Hospitality, Media & Entertainment, & Healthcare  ",
  },
  {
    id: "general",
    question: "Do I get a say in the design and implementation of my project?",
    answer:
      "Definitely! All of our projects start with a design phase that is based on a website questionnaire that takes into account your likes and tastes. The other great part? We design until we get it right, which means no revision limitations like most other companies place on their website designs.",
  },
  {
    id: "service",
    question:
      "What type of support do you provide my business on your products or services?",
    answer:
      "All of our products and services come with personalised support from our amazing team. The way we operate during the implementation phase of a project is that our team acts as your internal digital marketing and sales management team giving you all the benefits an internal team can give, providing a weekly report on project state amongst other things. On the other hand, during the project maintenance phase, we provide the best customer service possible by assigning a member of our team to your business who will be available 24/7 for your support.",
  },
  {
    id: "pricing",
    question: "How am I billed for your services and is there a contract?",
    answer:
      "Most of our services are offered on a contract basis that can range from as little as 1-month to 1-year.  However, flexible contracts can be agreed upon based on negotiations. Extended services are offered at discounted rates. Be aware that the period of a contract is based on the size of the project and we estimate projects to range between small, medium, and full-scale implementations.  Small projects can be one-time engagement, and as such billed flexibly. But we do not offer month-to-month agreement on mid sized to full scale implementations because of the intense preparation and research it takes to get a digital strategy fully up and running and positioned for success.  We believe that anyone that is guaranteeing overnight results using their services might as well be selling snake oil. The internet is the most competitive business space in the world and you need the best of the best in your corner in order to succeed. Finally, we believe that each of our customers are unique and have different requirements, as such all customers will be presented with a custom proposal that is unique to their business industry and requirements. For more on pricing and billing, reach out to us via our contact form below",
  },
  {
    id: "general",
    question:
      "Why should I hire Lifehouse Creatives team to implement Digital Marketing and Sales Management services for my business?",
    answer:
      "Implementing a digital strategy is one of the most strategic things you can do for your business, and we want to help you create impactful digital experiences as much as you are looking to grow your business. If you're looking to implement a high level digital strategy for your business on a budget, then you’ll find that our team prioritises long-term business relationships above immediate financial remunerations. Working with Lifehouse Creatives Team is your opportunity to discover the force behind impactful digital experiences.",
  },
  {
    id: "general",
    question: "How do I get my business flying with Lifehouse Creatives?",
    answer:
      "To get started, you have a few different options. You can request a callback through our main website form or book a Free 30 minutes consultation through this calendar. Alternately, Call us at (234) 903-224-5613",
  },
];

const question2 = {
  id: "general",
  question3: [],
};

export default function Faq() {
  const [data2, setData] = useState(question2);

  const checked = question.filter((data) => {
    return data.id === data2.id;
  });

  return (
    <div className="mt-10">
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
          FAQ
        </h1>
      </div>
      <div className={cn("text-center  text-bold  ", fontSans.className)}>
        {/* <h1 className="text-2xl font-bold">Hi, We're here to help you</h1> */}
        <div className="border-0 shadow mt-6 sm:w-10/12 xs:w-11/12 w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto border p-2 rounded-lg flex items-center justify-center gap-6">
          <Image src={search.src} width={20} height={20} alt="search" />

          <input
            style={{
              borderBottomStyle: "none",
            }}
            type="text"
            id="text"
            className="text-sm md:w-9/12 xs:w-11/12 sm:w-11/12 w-10/12 p-1 outline-none"
            placeholder="Keywords (General, Pricing, Service)"
          />
          <Button
            className="text-sm sm:text-sm xs:text-xs bg-[#9e591b] text-white "
            onClick={() => {
              if (document.querySelector("#text").value === "") return;
              setData({
                id: document.querySelector("#text").value.toLowerCase(),
                question3: [],
              });
            }}
          >
            Search
          </Button>
        </div>
        <p className="mt-4 text-sm sm:text-sm xs:text-xs">
          Find answers to frequently asked questions
        </p>

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-6 "
          onClick={(e) => {
            const target = e.target.id.toLowerCase();
            console.log(e);
            if (!target) return;
            setData({
              id: target,
              question3: [],
            });
          }}
        >
          <div
            className="bg-[#9e591b] text-white cursor-pointer shadow xs:w-3/12 sm:w-2/12 md:w-2/12 lg:w-2/12 xl:w-1/12 xs:p-4 md:p-4   flex items-center flex-col gap-6 xs:gap-1 rounded-xl"
            id="general"
          >
            <Image
              className="xs:hidden md:flex"
              src={general.src}
              width={60}
              height={60}
              alt="general_img"
              id="general"
            />
            <Image
              className="xs:flex md:hidden"
              src={general.src}
              width={32}
              height={32}
              alt="general_img"
              id="general"
            />
            <p id="general" className="xs:text-xs md:text-sm font-bold ">
              General
            </p>
          </div>
          <div
            className="bg-[#9e591b] text-white cursor-pointer shadow xs:w-3/12 sm:w-2/12 md:w-2/12 lg:w-2/12 xl:w-1/12 xs:p-4 md:p-4   flex items-center flex-col gap-6 xs:gap-1 rounded-xl"
            id="service"
          >
            <Image
              className="xs:hidden md:flex"
              src={customer_service.src}
              width={60}
              height={60}
              alt="customer_Service"
              id="service"
            />
            <Image
              className="xs:flex md:hidden"
              src={customer_service.src}
              width={32}
              height={32}
              alt="customer_Service"
              id="service"
            />

            <p id="service" className="xs:text-xs md:text-sm font-bold ">
              Services
            </p>
          </div>
          <div
            className="bg-[#9e591b] text-white cursor-pointer shadow xs:w-3/12 sm:w-2/12 md:w-2/12 lg:w-2/12 xl:w-1/12 xs:p-4 md:p-4   flex items-center flex-col gap-6 xs:gap-1 rounded-xl"
            id="pricing"
          >
            <Image
              className="xs:hidden md:flex"
              src={pricing2.src}
              width={64}
              height={64}
              alt="pricing"
            />
            <Image
              className="xs:flex md:hidden"
              src={pricing2.src}
              width={32}
              height={32}
              alt="pricing"
            />
            <p id="pricing" className="xs:text-xs md:text-sm font-bold ">
              Pricing
            </p>
          </div>
        </div>
      </div>

      <h3
        className={cn("text-center text-xl font-bold mt-10", poppins.className)}
      >
        {checked[0]?.id.toLocaleUpperCase()}
      </h3>

      <div className=" flex flex-col  mt-6 ">
        {checked.map((data, index) => {
          if (!data) return;
          return (
            <div
              key={index}
              className={cn(
                "questions sm:w-10/12  w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto sm:mx-auto md:mx-auto",
                fontSans.className
              )}
            >
              <AccordionDemo queries={data} value={index} />
            </div>
          );
        })}
      </div>

      <div
        className={cn(
          "md:hidden text-center mt-10 w-10/12 mx-auto",
          fontSans.className
        )}
      >
        <h1 className="text-lg font-bold mb-6">You still have a question?</h1>
        <p className="text-xs md:text-sm">
          If you can not find what you are looking for, click contact Lifehouse
          creatives support below
        </p>
      </div>
    </div>
  );
}
