import BlogCarousel from "@/components/blogCarousel";
import BlogNav from "@/components/blogNav";
import BlogPosts from "@/components/blogPosts";
import Trendingblog from "@/components/trendingblog";
import Footer from "@/components/footer";

export default function BlogPage() {
  return (
    <div className="">
      <BlogNav />
      <Trendingblog />
      <BlogCarousel />

      <BlogPosts />
      <Footer />
    </div>
  );
}
