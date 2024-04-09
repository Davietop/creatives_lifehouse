import { fontSans } from "@/fonts";
import { cn } from "@/lib/utils";
export default function AboutPage() {
  return (
    <div className={cn("shape div", fontSans.className)}>
      <div className="relative top-[20px] flex items-center justify-center text-center  flex-col text-white ">
        <h1 className=" text-2xl">About Us</h1>
        <p className="text-xs w-10/12 mt-2">
          Read more about us. Our Vison, mission, success and many other things
          you might love
        </p>
      </div>
    </div>
  );
}
