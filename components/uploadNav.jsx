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

export default function UploadNav() {
  return (
    <nav>
      <div className="xs:hidden pt-4 pb-4 sm:flex items-center justify-around ">
        <Link href="/">
          <Image
            src={logo}
            className="sm:w-[70px] md:w-[80px] lg:w-[90px]"
            width={80}
            height={80}
            alt="logo"
          />
        </Link>

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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
