"use client";

import { AccordionDemo } from "@/components/accordion";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HeroSectionsm from "@/components/herosm";
import Members from "@/components/members";
import NavBar from "@/components/nav";
import Services from "@/components/services";
import Technology from "@/components/technolgies";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="xs:hidden sm:hidden md:flex h-[600px] w-full bg-bg_test2 bg-cover bg-left bg-no-repeat md:h-[400px] lg:h-[500px] xl:h-[600px] ">
          <HeroSection />
        </div>
        <div>
          <HeroSectionsm />
        </div>
      </main>
      <Services />
      <Technology />
      <Members />
      <Faq />
      <Footer />
    </div>
  );
}
