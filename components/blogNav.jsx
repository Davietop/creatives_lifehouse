"use client";

import Image from "next/image";
import search from "../public/search.png";
import logo from "../public/mainLogo.png";

import google from "../public/google.png";
import linkedin from "../public/linkedin.png";
import twitter from "../public/twitter.png";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import touch from "../public/touch.png";
import { fontSans, poppins } from "@/fonts";

import Modal from "./modal";

import React, { useState, useEffect } from "react";

import DrawerSearch from "./drawerSearch";
import { Drawer, DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dveiadlmhbhaqxbckdgz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2ZWlhZGxtaGJoYXF4YmNrZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzU2NzAsImV4cCI6MjAzMDc1MTY3MH0.SxSW5XEb3KQbYHGyt4Yj3SjvfC0LGiVV2BfvcUkvJ2A"
);

const blogs = {
  dataBlog: [],
};
const resultBlog = {
  dataResult: [],
};

export default function BlogNav() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(resultBlog);

  const [blogData, setBlogData] = useState(blogs);
  useEffect(() => {
    const timeout = setTimeout(() => {
      async function getData() {
        const { data, error } = await supabase.from("blogpost").select();
        setBlogData({
          ...blogs,
          dataBlog: data,
        });

        return data;
      }

      getData();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [blogs.data]);

  return (
    <nav>
      <div className="xs:hidden pt-4 pb-4 sm:flex items-center justify-around ">
        <div className="border-0 shadow bg-white  w-2/12  border p-2.5 rounded-full flex items-center  gap-3 sm:w-3/12  md:w-3/12 lg:w-[22%] ">
          <input
            style={{
              borderBottomStyle: "none",
            }}
            type="text"
            id="text"
            className={cn(
              "sm:text-sm xs:text-xs mt-[-0.1px] w-full outline-none ",
              poppins.className
            )}
            placeholder="Search by category"
          />

          <Drawer>
            <DrawerTrigger asChild>
              <Image
                onClick={() => {
                  setQuery(document.querySelector("#text").value);
                  const checked = blogData.dataBlog.filter((check) => {
                    return check.metadata.category.includes(query);
                  });

                  const searchResult = checked.map((data2) => {
                    if (!data2) return;
                    const str = data2.metadata.img.split("\\")[2];

                    const { data } = supabase.storage
                      .from("blogimage")
                      .getPublicUrl(`public/${data2.id}/${str}`);

                    console.log(data2);

                    return {
                      url: data.publicUrl,
                      author: data2.metadata.author,
                      category: data2.metadata.category,
                      title: data2.metadata.title,
                      summary: data2.metadata.summary,
                      publishDate: data2.metadata.publishDate,
                      id: data2.id,
                    };
                  });

                  setResult({
                    ...resultBlog,
                    dataResult: searchResult,
                  });

                  console.log(result);
                }}
                className="cursor-pointer"
                src={search.src}
                width={13}
                height={13}
                alt="search"
              />
            </DrawerTrigger>
            <DrawerSearch query={result} />
          </Drawer>
        </div>

        <Image
          src={logo}
          className="sm:w-[70px] md:w-[80px] lg:w-[90px]"
          width={80}
          height={80}
          alt="logo"
        />

        <div className="socials flex items-center  gap-6  ">
          <Link href="https://www.linkedin.com/company/lifehouse-creatives/">
            {" "}
            <Image width={16} height={16} alt="linkedin" src={linkedin.src} />
          </Link>
          <Link href="twitter.com/lifehouse_creatives">
            {" "}
            <Image width={16} height={16} alt="twitter" src={twitter.src} />
          </Link>
          <Link href="info@lifehousecreatives.com">
            <Image width={16} height={16} alt="google" src={google.src} />
          </Link>
        </div>
        <Sheet className={cn("hidden text-sm ")}>
          <SheetTrigger>
            {" "}
            <Image alt="image" width={20} height={20} src={touch} />
          </SheetTrigger>
          <SheetContent
            className={cn(poppins.className, " flex flex-col gap-6 pt-20")}
          >
            <Link color="foreground" href="/">
              Home
            </Link>

            <Link color="foreground" href="/about">
              About Us
            </Link>

            <Link href="/blog" aria-current="page">
              Blog & Resources
            </Link>

            <Modal />
          </SheetContent>
        </Sheet>
      </div>

      <div className="sm:hidden xs:flex gap-3  flex-col pt-2 pb-10 ">
        <Image
          src={logo}
          className="mx-auto sm:w-[70px] md:w-[80px] lg:w-[80px]"
          width={80}
          height={80}
          alt="logo"
        />

        <div className="flex pb-2 items-center justify-between pl-8 pr-8">
          <div className="socials flex items-center  gap-6  ">
            <Link href="https://www.linkedin.com/company/lifehouse-creatives/">
              {" "}
              <Image width={15} height={15} alt="linkedin" src={linkedin.src} />
            </Link>
            <Link href="twitter.com/lifehouse_creatives">
              {" "}
              <Image width={15} height={15} alt="twitter" src={twitter.src} />
            </Link>
            <Link href="info@lifehousecreatives.com">
              <Image width={15} height={15} alt="google" src={google.src} />
            </Link>
          </div>
          <Sheet className={cn("hidden text-sm ")}>
            <SheetTrigger>
              {" "}
              <Image alt="image" width={20} height={20} src={touch} />
            </SheetTrigger>
            <SheetContent
              className={cn(poppins.className, " flex flex-col gap-6 pt-20")}
            >
              <Link color="foreground" href="/">
                Home
              </Link>

              <Link color="foreground" href="/about">
                About Us
              </Link>

              <Link href="/blog" aria-current="page">
                Blog & Resources
              </Link>

              <Modal />
            </SheetContent>
          </Sheet>
        </div>

        <div className="border-0 shadow mx-auto  w-11/12 border mt-2 p-3.5 rounded-full flex items-center  justify-center gap-3  ">
          <input
            style={{
              borderBottomStyle: "none",
            }}
            type="text"
            id="text"
            className={cn(
              "text sm:text-sm xs:text-xs mt-[-0.1px] w-full outline-none ",
              poppins.className
            )}
            placeholder="Search by category"
          />

          <Drawer>
            <DrawerTrigger asChild>
              <Image
                onClick={() => {
                  setQuery(document.querySelector("#text").value);
                  const checked = blogData.dataBlog.filter((check) => {
                    return check.metadata.category.includes(query);
                  });

                  const searchResult = checked.map((data2) => {
                    if (!data2) return;
                    const str = data2.metadata.img.split("\\")[2];

                    const { data } = supabase.storage
                      .from("blogimage")
                      .getPublicUrl(`public/${data2.id}/${str}`);

                    console.log(data2);

                    return {
                      url: data.publicUrl,
                      author: data2.metadata.author,
                      category: data2.metadata.category,
                      title: data2.metadata.title,
                      summary: data2.metadata.summary,
                      publishDate: data2.metadata.publishDate,
                      id: data2.id,
                    };
                  });

                  setResult({
                    ...resultBlog,
                    dataResult: searchResult,
                  });

                  console.log(result);
                }}
                className="cursor-pointer"
                src={search.src}
                width={13}
                height={13}
                alt="search"
              />
            </DrawerTrigger>
            <DrawerSearch query={result} />
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
