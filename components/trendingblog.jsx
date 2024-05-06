import { fontSans, poppins } from "@/fonts";
import { cn } from "@/lib/utils";

export default function Trendingblog() {
  return (
    <div className="flex flex-col items-center justify-center md:mt-10  sm:mt-4 ">
      <h1
        className={cn(
          "xs:text-xl sm:text-2xl md:text-3xl xl:text-3xl font-bold",
          poppins.className
        )}
      >
        Trending
      </h1>
    </div>
  );
}
