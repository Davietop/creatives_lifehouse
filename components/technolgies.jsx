"use client";
// import React from "react";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
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
      perPage: 4,
      arrows: false,
      pagination: false,
      focus: "center",
    });

    splide.mount({ AutoScroll });
  });
  return (
    <div className="mt-10">
      <div className="app">
        <section className="splide" aria-label="Basic Structure Example">
          <div className="splide__track">
            <ul className="splide__list ">
              {src.map((data) => {
                return (
                  <li className="splide__slide ">
                    <div className="splide__slide__container w-[500px]">
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
      <div className="app"></div>
    </div>
  );
}
