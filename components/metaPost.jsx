"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { fontSans, poppins, noto_sans_georgian, merriweather } from "@/fonts";

const metaData = {};
const contentData = [];

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

async function getLink(data4) {
  // const { data, error } = await supabase.storage
  //   .from("blogimage")
  //   .list(`content/${data4.id}`);
  // console.log(data4.id);

  const { data } = supabase.storage
    .from("blogimage")
    .getPublicUrl(`content/${data4.id}/${str}`);

  console.log(data);
}

export default function MetaPost({ idKey }) {
  const [postMetaData, setPostMetaData] = useState(metaData);
  const [postContentData, setPostContentData] = useState(contentData);
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from("blogpost").select("");
      const scanned = data.find((ret) => {
        return ret.id === idKey;
      });

      setPostMetaData(scanned.metadata);
      setPostContentData(scanned.contentSections);
    }

    getData();
  }, [metaData, idKey]);
  if (!postMetaData) return;
  const date = new Date(postMetaData.publishDate).toDateString();

  setTimeout(() => {
    const str = postMetaData.img?.split("\\")[2];

    const { data } = supabase.storage
      .from("blogimage")
      .getPublicUrl(`public/${idKey}/${str}`);
    setUrl(data.publicUrl);
  }, 2000);

  return (
    <div>
      <div className="mt-6 mb-20 flex items-center justify-center  gap-14  w-full basis-3/12 flex-wrap  xs:flex-col md:flex-row">
        <div
          key={idKey}
          data-tab={idKey}
          className={cn(
            "post text-center flex flex-col items-center gap-6 xs:gap-4 justify-center 2xl:w-9/12 xl:w-9/12 lg:w-9/12 xs:w-11/12 sm:w-11/12 md:w-10/12 ",
            merriweather.className
          )}
        >
          <h1
            className={cn(
              "xs:text-3xl xs:mt-4 md:text-4xl  text-center lg:text-4xl xl:text-5xl xl:mt-10   font-[900]",
              merriweather.className
            )}
          >
            {postMetaData.title}
          </h1>
          <img className="rounded-lg mt-10" src={url} alt="img" />
          <div className={cn("flex xs:gap-2  flex-col")}>
            <p className="font-[900] text-lg xs:text-left sm:text-center ">
              {postMetaData.category
                ? postMetaData.category
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                : ""}
              <span className="text-sm font-[400]"> - {date}</span>
            </p>

            <p className="xs:text-lg md:text-xl  xl:text-2xl text-left mt-4 font-[500]">
              {postMetaData.summary}
            </p>
          </div>
        </div>

        {postContentData.map((data4, index) => {
          const str = data4.mediaImage.split("\\")[2];

          const { data } = supabase.storage
            .from("blogimage")
            .getPublicUrl(`content/${data4.id}/${str}`);

          return (
            <div
              key={index}
              className={cn(
                "2xl:w-9/12 xl:w-9/12 lg:w-9/12 xs:w-11/12 sm:w-11/12 md:w-10/12",
                merriweather.className
              )}
            >
              <h1 className="font-[900] xs:text-2xl xl:text-3xl mb-4">
                {data4.sectionTitle}
              </h1>
              <p className="font-[500] xs:text-lg md:text-xl  xl:text-xl">
                {data4.content}
              </p>

              {data.publicUrl.split("/")[10] === "undefined" ? (
                <p></p>
              ) : (
                <img className="mx-auto mt-6" src={data.publicUrl} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
