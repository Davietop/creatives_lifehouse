import BlogNav from "@/components/blogNav";
import MetaPost from "@/components/metaPost";

export default function Home({ params }) {
  const id = params.id;
  return (
    <>
      <BlogNav />
      <MetaPost idKey={id} />
    </>
  );
}
