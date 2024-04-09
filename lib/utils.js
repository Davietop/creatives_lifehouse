import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function generateSlides(length = 10, sig = 0) {
  return Array.from({ length }).map((value, index) => {
    index = sig || index;

    return {
      src: `https://source.unsplash.com/random/800x450?sig=${index}`,
      alt: `Image ${index + 1}`,
    };
  });
}
