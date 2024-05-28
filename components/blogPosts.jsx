"use client";
import blog from "../public/blog.jpg";
import { cn } from "@/lib/utils";
import { fontSans, poppins } from "@/fonts";
import { useEffect } from "react";

export default function BlogPosts() {
  return (
    <div className="mb-20">
      <h1
        className={cn("mt-14 text-xl font-bold text-center", poppins.className)}
      >
        Blogs
      </h1>

      <div className="mt-6 flex items-center justify-center  gap-14  w-full basis-3/12 flex-wrap  xs:flex-col lg:flex-row">
        <div className=" flex flex-col items-center gap-6 xs:gap-4 justify-center 2xl:w-3/12 xl:w-3/12 lg:w-4/12 xs:w-10/12 sm:w-10/12 md:w-8/12 ">
          <img className="" src={blog.src} alt="img" />
          <div className={cn("flex xs:gap-2  flex-col", fontSans.className)}>
            <p className="font-bold text-xs">
              Business, Travel{" "}
              <span className="text-xs font-[400]">- July 2, 2020</span>
            </p>

            <h1
              className={cn(
                "xs:text-sm lg:text-base   font-bold",
                poppins.className
              )}
            >
              Your most unhappy customers are your greatest source of learning.
            </h1>
            <p className="text-xs font-[500]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts...
            </p>

            <div className="flex items-center gap-2 mt-4">
              <img
                src={blog.src}
                alt="blog"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="text-xs ">
                <h5 className="font-bold">Oyatoye David</h5>
                <p className="font-[400]">CEO and Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-6 xs:gap-4 justify-center 2xl:w-3/12 xl:w-3/12 lg:w-4/12 xs:w-10/12 sm:w-10/12 md:w-8/12 ">
          <img className="" src={blog.src} alt="img" />
          <div className={cn("flex xs:gap-2  flex-col", fontSans.className)}>
            <p className="font-bold text-xs">
              Business, Travel{" "}
              <span className="text-xs font-[400]">- July 2, 2020</span>
            </p>

            <h1
              className={cn(
                "xs:text-sm lg:text-base   font-bold",
                poppins.className
              )}
            >
              Your most unhappy customers are your greatest source of learning.
            </h1>
            <p className="text-xs font-[500]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts...
            </p>

            <div className="flex items-center gap-2 mt-4">
              <img
                src={blog.src}
                alt="blog"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="text-xs ">
                <h5 className="font-bold">Oyatoye David</h5>
                <p className="font-[400]">CEO and Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-6 xs:gap-4 justify-center 2xl:w-3/12 xl:w-3/12 lg:w-4/12 xs:w-10/12 sm:w-10/12 md:w-8/12 ">
          <img className="" src={blog.src} alt="img" />
          <div className={cn("flex xs:gap-2  flex-col", fontSans.className)}>
            <p className="font-bold text-xs">
              Business, Travel{" "}
              <span className="text-xs font-[400]">- July 2, 2020</span>
            </p>

            <h1
              className={cn(
                "xs:text-sm lg:text-base xl:text-base  font-bold",
                poppins.className
              )}
            >
              Your most unhappy customers are your greatest source of learning.
            </h1>
            <p className="text-xs font-[500]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts...
            </p>

            <div className="flex items-center gap-2 mt-4">
              <img
                src={blog.src}
                alt="blog"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="text-xs ">
                <h5 className="font-bold">Oyatoye David</h5>
                <p className="font-[400]">CEO and Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-6 xs:gap-4 justify-center 2xl:w-3/12 xl:w-3/12 lg:w-4/12 xs:w-10/12 sm:w-10/12 md:w-8/12 ">
          <img className="" src={blog.src} alt="img" />
          <div className={cn("flex xs:gap-2  flex-col", fontSans.className)}>
            <p className="font-bold text-xs">
              Business, Travel{" "}
              <span className="text-xs font-[400]">- July 2, 2020</span>
            </p>

            <h1
              className={cn(
                "xs:text-sm lg:text-base xl:text-base  font-bold",
                poppins.className
              )}
            >
              Your most unhappy customers are your greatest source of learning.
            </h1>
            <p className="text-xs font-[500]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts...
            </p>

            <div className="flex items-center gap-2 mt-4">
              <img
                src={blog.src}
                alt="blog"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="text-xs ">
                <h5 className="font-bold">Oyatoye David</h5>
                <p className="font-[400]">CEO and Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
