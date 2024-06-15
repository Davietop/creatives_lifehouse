"use client";
// import React from "react";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect } from "react";
import Hubspot from "../public/technologies/hubspot.webp";
import Saleforce from "../public/technologies/saleforce.webp";
import HighLevel from "../public/technologies/highlogo.webp";
import Zoho from "../public/technologies/zoho.webp";
import Wordpress from "../public/technologies/wordpress (1).webp";
import Wix from "../public/technologies/wix.webp";
import Godaddy from "../public/technologies/godaddy.webp";
import Squarespace from "../public/technologies/squarespace.webp";
import Webflow from "../public/technologies/webflow.webp";
// import Ahrefs from "../public/technologies/ahref.svg";
import Semrush from "../public/technologies/semrush.webp";
import Mailchimp from "../public/technologies/mailchimp.webp";
import Image from "next/image";
import { fontSans } from "@/fonts";

// hubspot, saleforce, go highlevel, zoho createMotionComponent,wordpress, wix, godaddy, squarespace, webflow, ahrefs, sm Rubik_Doodle_Shadow, mailchimp

const src = [
  Hubspot.src,
  HighLevel.src,
  Zoho.src,
  Saleforce.src,
  Godaddy.src,

  Squarespace.src,
  Wordpress.src,
  Webflow.src,
  Semrush.src,
  Mailchimp.src,
  Wix.src,
];

// splide.mount();

export default function Slide() {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      perPage: 3,
      arrows: false,
      pagination: false,
      focus: "center",
      speed: 600,
    });

    splide.mount({ AutoScroll });
  });
  return (
    <div className="mt-10 flex items-center justify-center flex-col">
      <h1
        className={
          ("font-bold xs:text-xs sm:text-sm md:text-base", fontSans.className)
        }
      >
        Technologies we work with
      </h1>
      <div className="app mt-6">
        <section className="splide" aria-label="Basic Structure Example">
          <div className="splide__track">
            <ul className="splide__list ">
              {src.map((data, i) => {
                return (
                  <li key={i} className="splide__slide ">
                    <div className="splide__slide__container w-[500px]">
                      <img
                        src={data}
                        className=" xs:w-[300px] sm:w-[300px] md:w-4/12"
                        alt="hello"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
      <div className="app"></div>
    </div>
  );
}
