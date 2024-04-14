"use client";
// import React from "react";
// import { Splid} from "@splidejs/splide";

import "@splidejs/splide/css";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect } from "react";
import Hubspot from "../public/technologies/hubspot.png";
import Saleforce from "../public/technologies/saleforce.png";
import HighLevel from "../public/technologies/highlogo.png";
import Zoho from "../public/technologies/zoho.svg";
import Wordpress from "../public/technologies/wordpress.png";
import Wix from "../public/technologies/wix.png";
import Godaddy from "../public/technologies/godaddy.png";
import Squarespace from "../public/technologies/squarespace.png";
import Webflow from "../public/technologies/webflow.png";
// import Ahrefs from "../public/technologies/ahref.svg";
import Semrush from "../public/technologies/semrush.png";
import Mailchimp from "../public/technologies/mailchimp.png";
import Image from "next/image";
import { fontSans } from "@/fonts";
import { Splide } from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

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

export default function Business() {
  useEffect(() => {
    const splide2 = new Splide(".splide2", {
      type: "loop",
      perPage: 4,
      arrows: false,
      pagination: false,
      focus: "center",
      speed: 200,
    });

    splide2.mount({ AutoScroll });
  });
  return (
    <div className="mt-10 flex items-center justify-center flex-col">
      <div className="app2 mt-6">
        <h1
          className={
            ("font-black xs:text-xs sm:text-sm md:text-base",
            fontSans.className)
          }
        >
          Trusted Clients
        </h1>
        <section className="splide2" aria-label="Basic Structure Example">
          <div className="splide__track">
            <ul className="splide__list ">
              {src.map((data, i) => {
                return (
                  <li key={i} className="splide__slide2 ">
                    <div className="splide__slide__container2 w-[500px]">
                      <img
                        src={data}
                        className="xs:w-[900px] sm:w-[500px] md:w-[140px]"
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

      <div className="app2"></div>
    </div>
  );
}
