"use client";

import { AccordionDemo } from "@/components/accordion";
import Message from "@/components/callback";
import Clients from "@/components/business_parteners";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import HeroSectionsm from "@/components/herosm";
import Members from "@/components/members";
import NavBar from "@/components/nav";
import Services from "@/components/services";
import Slide from "@/components/technolgies";
import Technology from "@/components/technolgies";
import ContactForm from "@/components/testingContact";
import Image from "next/image";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="xs:hidden sm:hidden md:flex h-[600px] w-full bg-bg_test2 bg-cover bg-center bg-no-repeat md:h-[400px] lg:h-[500px] xl:h-[550px] ">
          <HeroSection />
        </div>
        <div>
          <HeroSectionsm />
        </div>
      </main>

      <Services />

      <Members />

      <Slide />

      <Faq />

      <ContactForm />

      <Footer />
    </div>
  );
}
