"use client";

import BlogCarousel from "@/components/blogCarousel";
import BlogNav from "@/components/blogNav";
import BlogPosts from "@/components/blogPosts";
import Trendingblog from "@/components/trendingblog";
import Footer from "@/components/footer";
import Pag from "@/components/pag";
// import { PaginationDemo } from "@/components/pagination";

export default function BlogPage() {
  return (
    <div className="">
      <BlogNav />
      <Trendingblog />
      <BlogCarousel />

      <BlogPosts />
      {/* <PaginationDemo /> */}
      <Pag />
      <Footer />
    </div>
  );
}
