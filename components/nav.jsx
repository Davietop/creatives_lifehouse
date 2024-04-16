"use client";
import Image from "next/image";
import logo from "../public/mainLogo.png";
import touch from "../public/touch.png";
import { cn } from "@/lib/utils";
import { fontSans } from "@/fonts";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  NextUIProvider,
} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      page: "Home",
      href: "/",
    },
    {
      page: "About Us",
      href: "/about",
    },
    {
      page: "Blogs & Resources",
      href: "/",
    },
  ];

  return (
    <NextUIProvider>
      <Navbar
        className={cn("sm:p-2 md:p-4", fontSans.variable)}
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden">
          <NavbarBrand>
            <Image
              alt="image"
              className="lg:w-[100px]"
              src={logo}
              width={80}
              height={80}
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarBrand>
            <Image
              alt="image"
              className="lg:w-[100px]"
              src={logo}
              width={120}
              height={120}
            />
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Blog & Resources
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden xl:flex">
            <Button as={Link} color="warning" href="#contact" variant="flat">
              Get Started
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Sheet className={cn("hidden text-sm ")}>
              <SheetTrigger>
                {" "}
                <Image alt="image" width={20} height={20} src={touch} />
              </SheetTrigger>
              <SheetContent
                className={cn(fontSans.variable, "bg-[#121b1b] text-white ")}
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-center flex-col">
                    <Image alt="image" src={logo} width={100} height={100} />
                  </SheetTitle>

                  <SheetDescription className=" mt-6 text-white">
                    Maximize Connections, Optimize Campaigns: Your Ultimate CRM
                    and Digital Marketing Partner!
                    <div className="mt-10 text-left flex flex-col  gap-10">
                      <h1>
                        Call Us At: <br />
                        <span className="ml-10  font-bold text-base">
                          {" "}
                          +(234) 903-224-5613
                        </span>
                      </h1>
                      <h1>
                        You Can Find Us At: <br />
                        <span className="ml-10  font-bold text-base">
                          {" "}
                          Lagos Nigeria
                        </span>
                      </h1>
                      <h1>
                        Email Now: <br />
                        <span className="ml-10  font-bold text-base">
                          {" "}
                          info@lifehousecreatives.com
                        </span>
                      </h1>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((link, index) => {
            return (
              <NavbarMenuItem key={`${link}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href={`${link.href}`}
                  size="lg"
                >
                  {link.page}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </Navbar>
    </NextUIProvider>
  );
}
