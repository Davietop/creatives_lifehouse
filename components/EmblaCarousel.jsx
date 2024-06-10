import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { fontSans, merriweather, poppins } from "@/fonts";
import Image from "next/image";
import blog from "../public/blog.jpg";
import Founder from "../public/timi2.png";

import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

const dataBlog = {
  blogPosts: [],
};
const metaBlog = {
  metaInfo: [],
  imgId: [],
};
const urlPath = [];

const createObj = {
  name: "",
  uid: "",
};

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [blogData, setBlogData] = useState(dataBlog);
  const [metaData, setMetaData] = useState(metaBlog);
  const [create, setCreate] = useState(createObj);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  let fill = [];
  let fillId = [];

  useEffect(() => {
    const timeout = setTimeout(() => {
      async function getData() {
        const { data, error } = await supabase.from("blogpost").select();
        setBlogData({
          ...dataBlog,
          blogPosts: data,
        });

        return data;
      }

      async function getMetaDataImg(id) {
        const { data, error } = await supabase.storage
          .from("blogimage")
          .list(`public/${id}`);

        const urls = data.map((file, index, arrayImage) => {
          const fullPath = `public/${id}/${file.name}`;
          const { data } = supabase.storage
            .from("blogimage")
            .getPublicUrl(fullPath);
          fill.push(data);

          fillId.push(...arrayImage);

          setMetaData({
            ...metaData,
            metaInfo: fill,
            imgId: fillId,
          });
        });
      }

      getData().then((data) => {
        data.map((data2, index) => {
          getMetaDataImg(data2.id);
        });
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dataBlog.blogPosts, metaBlog.metaInfo, createObj.name]);

  function truncateStringAtWordBoundary(str, maxLength, text) {
    if (str.length <= maxLength) {
      return str;
    }

    const trimmedStr = str.slice(0, maxLength);
    const lastSpaceIndex = trimmedStr.lastIndexOf(text);

    if (lastSpaceIndex === -1) {
      return trimmedStr + "...";
    }

    return trimmedStr.slice(0, lastSpaceIndex) + "...";
  }

  const maxLength = 306;

  async function load(data2) {
    const { data, error } = await supabase.storage
      .from("blogimage")
      .list(`public/${data2.id}`, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
  }

  return (
    <section
      className={cn(
        "embla   theme-dark  max-h-max xs:w-full sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-10/12  mt-4 mx-auto "
      )}
    >
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container  touch-pan-y flex ml-[calc(var(--slide-spacing) * -1)]">
          {blogData.blogPosts.map((data2, index, arrayData) => {
            const str = data2.metadata.img.split("\\")[2];

            const { data } = supabase.storage
              .from("blogimage")
              .getPublicUrl(`public/${data2.id}/${str}`);

            if (!data) return;
            const date = new Date(data2.metadata.publishDate).toDateString();
            const truncatedStr = truncateStringAtWordBoundary(
              data2.metadata.summary,
              maxLength,
              "more"
            );

            return (
              <div
                data-tab={data2.id}
                className="post embla__slide "
                key={index}
              >
                <div className="embla__slide__number    rounded-[1.8rem] font-[600]  flex items-center xs:gap-6 lg:gap-10 xs:flex-col lg:flex-row m-[20px]">
                  <img
                    className="rounded-lg object-cover md:w-[700px] md:h-[450px] lg:w-[400px] xl:w-[550px] w-[370px] h-[400px] xs:w-full"
                    src={data.publicUrl}
                    alt="img"
                  />
                  <div
                    className={cn("flex xs:gap-2 sm:gap-2 lg:gap-4 flex-col")}
                  >
                    <p
                      className={cn(
                        "font-[900] text-base",
                        merriweather.className
                      )}
                    >
                      {data2.metadata.category
                        ? data2.metadata.category
                            .split(" ")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")
                        : ""}
                      <span className="font-[400] text-xs">- {date}</span>
                    </p>

                    <h1
                      onClick={(e) => {
                        const clicked = e.target.closest(".post");

                        window.location.href = `/post/${clicked.dataset.tab}`;
                      }}
                      className={cn(
                        "xs:text-lg sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl font-[900] cursor-pointer",
                        merriweather.className
                      )}
                    >
                      {data2.metadata.title}
                    </h1>

                    <p className="text-base font-[500]">{truncatedStr}</p>

                    <div className="flex items-center gap-2 mt-4">
                      <img
                        src={Founder.src}
                        className="w-[40px] h-[40px] rounded-full"
                        alt="blog"
                      />
                      <div
                        className={cn(
                          " flex flex-col gap-1 ",
                          merriweather.className
                        )}
                      >
                        <h5 className="text-xs font-[900]">
                          {data2.metadata.author}
                        </h5>
                        <p className="text-xs font-[400]">Team Lead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
