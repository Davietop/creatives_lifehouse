"use client";
import blog from "../public/blog.jpg";
import { cn } from "@/lib/utils";
import { fontSans, merriweather, poppins } from "@/fonts";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Founder from "../public/timi2.webp";
import { useRouter } from "next/navigation";

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
};
const urlPath = [];

export default function BlogPosts({ dataBlogg }) {
  const [blogData, setBlogData] = useState(dataBlog);
  const [metaData, setMetaData] = useState(metaBlog);
  const [url, setUrl] = useState(urlPath);
  const router = useRouter();

  let fill = [];

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

        const urls = data.map((file) => {
          const fullPath = `public/${id}/${file.name}`;
          const { data } = supabase.storage
            .from("blogimage")
            .getPublicUrl(fullPath);
          fill.push(data);

          setMetaData({
            ...metaData,
            metaInfo: fill,
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
  }, [dataBlog.blogPosts, metaBlog.metaInfo]);

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

  const maxLength = 191;
  return (
    <div id="child-to-remove " className="mb-20">
      <h1
        className={cn(
          "mt-14 text-xl font-[900] text-center",
          merriweather.className
        )}
      >
        Blog Contents
      </h1>

      <div className="mt-6 flex items-center justify-center  gap-14  w-full basis-3/12 flex-wrap  xs:flex-col md:flex-row">
        {dataBlogg?.map((data2, index) => {
          if (!data2) return;
          const str = data2.metadata.img.split("\\")[2];

          const { data } = supabase.storage
            .from("blogimage")
            .getPublicUrl(`public/${data2.id}/${str}`);

          const date = new Date(data2.metadata.publishDate).toDateString();
          const truncatedStr = truncateStringAtWordBoundary(
            data2.metadata.summary,
            maxLength,
            "more"
          );

          if (!data) return;

          return (
            <div
              onClick={(e) => {
                const clicked = e.target.closest(".post");

                window.location.href = `/post/${clicked.dataset.tab}`;

                if (!clicked) return;
              }}
              key={index}
              data-tab={data2.id}
              className="post cursor-pointer flex flex-col  gap-6 xs:gap-4 justify-center 2xl:w-3/12 xl:w-3/12 lg:w-4/12 xs:w-11/12 sm:w-9/12 md:w-5/12 "
            >
              <div>
                <img
                  className="rounded-lg  object-cover md:w-[350px] md:h-[300px] xs:w-full xs:h-[400px] lg:w-[400px] lg:h-[300px]"
                  src={data.publicUrl}
                  alt="img"
                />
              </div>

              <div className={cn("flex xs:gap-2  flex-col")}>
                <p
                  className={cn("font-[900] text-base", merriweather.className)}
                >
                  {data2.metadata.category
                    ? data2.metadata.category
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    : ""}
                  <span className="text-xs font-[400]"> - {date}</span>
                </p>

                <h1
                  className={cn(
                    "text-base   font-[900]",
                    merriweather.className
                  )}
                >
                  {data2.metadata.title}
                </h1>
                <p className={cn("text-sm font-[500]")}>{truncatedStr}</p>

                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={Founder.src}
                    alt="blog"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className={cn("text-xs ", merriweather.className)}>
                    <h5 className="font-[900]"> {data2.metadata.author}</h5>
                    <p className="font-[700]">Team Lead</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
