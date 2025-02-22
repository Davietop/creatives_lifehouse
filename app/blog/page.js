"use client";

import BlogCarousel from "@/components/blogCarousel";
import BlogNav from "@/components/blogNav";
import BlogPosts from "@/components/blogPosts";
import Trendingblog from "@/components/trendingblog";
import Footer from "@/components/footer";
import Pag from "@/components/pag";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";

export default function BlogPage() {
  return (
    <div className="">
      <BlogNav />
      <Trendingblog />
      <BlogCarousel />

      <Pag />
      <Footer />
    </div>
  );
}
