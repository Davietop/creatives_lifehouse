import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { fontSans, poppins } from "@/fonts";
import Image from "next/image";
import blog from "../public/blog.jpg";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const [isPlaying, setIsPlaying] = useState(false);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
  }, [emblaApi]);

  return (
    <section
      className={cn(
        "embla   theme-dark  max-h-max xs:w-full sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-10/12  mt-4 mx-auto ",
        poppins.className
      )}
    >
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container  touch-pan-y flex ml-[calc(var(--slide-spacing) * -1)]">
          {slides.map((index) => (
            <div className="embla__slide " key={index}>
              <div className="embla__slide__number    rounded-[1.8rem] font-[600]  flex items-center gap-10 xs:flex-col lg:flex-row m-[20px]">
                <img
                  className="lg:w-5/12 xs:w-full  h-[400px]"
                  src={blog.src}
                  alt="img"
                />
                <div className={cn("flex xs:gap-2 sm:gap-4 flex-col")}>
                  <p className="font-bold xs:text-xs  sm:text-sm">
                    Business, Travel{" "}
                    <span className="font-[400] text-xs">- July 2, 2020</span>
                  </p>

                  <h1
                    className={cn(
                      "xs:text-sm sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold",
                      poppins.className
                    )}
                  >
                    Your most unhappy customers are your greatest source of
                    learning.
                  </h1>
                  <p className="xs:text-xs md:text-sm lg:text-sm font-[500]">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>

                  <div className="flex items-center gap-2 mt-4">
                    <img
                      src={blog.src}
                      className="w-[40px] h-[40px] rounded-full"
                      alt="blog"
                    />
                    <div
                      className={cn(
                        " flex flex-col gap-1 ",
                        fontSans.className
                      )}
                    >
                      <h5 className="text-xs font-bold">Oyatoye David</h5>
                      <p className="text-xs font-[400]">CEO and Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls w-full flex items-center justify-center   ">
        <div className="embla__dots flex flex-wrap justify-end items-center mr-[calc((2.6rem - 1.4rem) / 2 * -1)]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot  bg-[#dddddd] appearance-none touch-manipulation  inline-flex no-decoration pointer  p-0 xs:m-[5px] md:m-[5px] rounded-full   flex items-center justify-center shadow-inset-custom4    after:w-[10px] after:h-[10px] after:rounded-full after:flex after:items-center  after:content-[''] ".concat(
                index === selectedIndex
                  ? " embla__dot--selected after:shadow-inset-custom3 after:bg-[#9e591b] "
                  : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
