"use client";

import BlogCarousel from "@/components/blogCarousel";
import BlogNav from "@/components/blogNav";
import BlogPosts from "@/components/blogPosts";
import Trendingblog from "@/components/trendingblog";
import Footer from "@/components/footer";
import Pag from "@/components/pag";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();
  useEffect(() => {
    // window.location.reload();
    // const handlePopState = () => {
    //   window.location.reload();
    // };
    // window.addEventListener("popstate", handlePopState);
    // return () => {
    //   window.removeEventListener("popstate", handlePopState);
    // };
  }, []);
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
