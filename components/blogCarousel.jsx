"use client";

import Autoplay from "embla-carousel-autoplay";
import EmblaCarousel from "./EmblaCarousel";
const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function BlogCarousel() {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
