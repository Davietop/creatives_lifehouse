import Image from "next/image";
import search from "../public/search.png";
import { Button } from "@nextui-org/button";
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

export default function BlogNav() {
  return (
    <nav>
      <div className="xs:hidden pt-4 pb-4 sm:flex items-center justify-around ">
        <div className="border-0 shadow bg-white  w-2/12  border p-2.5 rounded-full flex items-center  justify-center gap-3 sm:w-3/12  md:w-3/12 lg:w-[22%] ">
          <Image src={search.src} width={13} height={13} alt="search" />

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
            placeholder="Search"
          />
        </div>

        <Image
          src={logo}
          className="sm:w-[70px] md:w-[80px] lg:w-[90px]"
          width={80}
          height={80}
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
          </SheetContent>
        </Sheet>
      </div>

      <div className="sm:hidden xs:flex gap-3  flex-col pt-2 pb-10 ">
        <Image
          src={logo}
          className="mx-auto sm:w-[70px] md:w-[80px] lg:w-[80px]"
          width={80}
          height={80}
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

        <div className="border-0 shadow mx-auto  w-11/12 border mt-2 p-3.5 rounded-full flex items-center  justify-center gap-3  ">
          <Image src={search.src} width={13} height={13} alt="search" />

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
            placeholder="Search"
          />
        </div>
      </div>
    </nav>
  );
}
