import { fontSans } from "@/fonts";
import { cn } from "@/lib/utils";
export default function AboutPage() {
  return (
    <div className={cn("mt-10", fontSans.className)}>
      <div className="relative top-[20px] flex items-center justify-center text-center  flex-col text-black ">
        <h1 className=" text-2xl font-bold">About Us</h1>
        <p className="text-sm xs:w-10/12  md:w-8/12 mt-2">
          Lifehouse Creatives is on a mission to help small and medium sized
          brands scale by optimizing their business processes including sales,
          marketing, and customer service pipelines. As a digital agency, we
          believe that technology can give every business a real edge, so we
          strive to help all businesses achieve success by leveraging digital
          technologies within their available resources.
        </p>
      </div>
    </div>
  );
}
