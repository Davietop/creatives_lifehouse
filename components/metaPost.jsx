"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { fontSans, poppins } from "@/fonts";

const metaData = {};

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

export default function MetaPost({ idKey }) {
  const [postMetaData, setPostMetaData] = useState(metaData);
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from("blogpost").select("");

      const scanned = data.find((ret) => {
        return ret.id === idKey;
      });

      setPostMetaData(scanned.metadata);
    }

    getData();
  }, [metaData]);

  const date = new Date(postMetaData.publishDate).toDateString();
  if (!postMetaData) return;

  setTimeout(() => {
    const str = postMetaData.img?.split("\\")[2];

    const { data } = supabase.storage
      .from("blogimage")
      .getPublicUrl(`public/${idKey}/${str}`);

    // console.log(data);

    setUrl(data.publicUrl);
  }, 2000);

  return (
    <div>
      <div className="mt-6 flex items-center justify-center  gap-14  w-full basis-3/12 flex-wrap  xs:flex-col md:flex-row">
        <div
          key={idKey}
          data-tab={idKey}
          className="post text-center flex flex-col items-center gap-6 xs:gap-4 justify-center 2xl:w-9/12 xl:w-9/12 lg:w-9/12 xs:w-11/12 sm:w-11/12 md:w-10/12 "
        >
          <img className="rounded-lg" src={url} alt="img" />
          <div className={cn("flex xs:gap-2  flex-col", fontSans.className)}>
            <p className="font-bold text-sm xs:text-left sm:text-center ">
              {postMetaData.category}
              <span className="text-sm font-[400]"> - {date}</span>
            </p>

            <h1
              className={cn(
                "xs:text-sm xs:text-left sm:text-center  lg:text-base xl:text-xl   font-bold",
                poppins.className
              )}
            >
              {postMetaData.title}
            </h1>
            <p className="text-sm  xs:text-left sm:text-center font-[500]">
              {postMetaData.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
