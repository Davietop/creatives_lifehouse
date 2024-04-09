"use client";
// import React from "react";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useEffect } from "react";
import Image from "next/image";
import Semrush from "../public/technologies/godaddy.png";

// splide.mount();

export default function Slide() {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      perPage: 1,
      arrows: false,
      pagination: false,
      focus: "center",
      gap: "1em",
      mediaQuery: "max",
    });

    splide.mount({ AutoScroll });
  });
  return (
    <div className="">
      <div className="app">
        <section className="splide" aria-label="Basic Structure Example">
          <div className="splide__track">
            <ul className="splide__list ">
              <li className="splide__slide ">
                <div className="splide__slide__container">
                  <h1>Slide 01</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 02</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 03</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 04</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 05</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 10</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 11</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 12</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 13</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 14</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 15</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 16</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 17</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 18</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 19</h1>
                </div>
              </li>
              <li className="splide__slide">
                <div className="splide__slide__container">
                  <h1>Slide 20</h1>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="app"></div>
    </div>
  );
}
