import Image from "next/image";
import facebook from "../public/socials/facebook.png";
import google from "../public/socials/google.png";
import linkedin from "../public/socials/linkedin.png";
import twitter from "../public/socials/twitter.png";
import logo from "../public/mainLogo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { poppins } from "@/fonts";

export default function Footer() {
  return (
    <div
      className={cn(
        "bg-[#121b1b]  pt-10  text-white w-full sm:h-full ",
        poppins.className
      )}
    >
      <div className="">
        <div className="flex items-center flex-col">
          <Image
            className="xs:flex md:hidden"
            width={100}
            height={100}
            alt="logo"
            src={logo.src}
          />
          <Image
            className="xs:hidden md:flex"
            width={150}
            height={150}
            alt="logo"
            src={logo.src}
          />

          <div className="socials flex items-center  gap-10 mt-4 ">
            <Image width={20} height={20} alt="facebook" src={facebook.src} />
            <Image width={20} height={20} alt="google" src={google.src} />
            <Image width={20} height={20} alt="twitter" src={twitter.src} />
            <Image width={20} height={20} alt="linkedin" src={linkedin.src} />
          </div>
        </div>

        <div className="information mt-4 p-6 flex justify-around sm:justify-around 2sm:justify-around md:justify-around lg:justify-around xl:justify-around 2xl:justify-around">
          <div className="connect">
            <h3 className="font-[600] text-lg sm:text-base 2sm:text-base md:text-base xl:text-lg 2xl:text-lg">
              Connect
            </h3>
            <div className="conp text-lg xs:text-sm sm:text-xs mt-4 2sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
              <p className="text_address w-[85%] pb-2 sm:w-[65%] md:w-[85%]">
                Lagos, Nigeria
              </p>
              <p className="pb-2">+(234) 903-224-5613</p>
              <p className="pb-2">info@lifehousecreatives.com</p>
            </div>
          </div>

          <div className="">
            <h3 className="font-[600] text-lg sm:text-base 2sm:text-base md:text-base xl:text-lg 2xl:text-lg">
              Navigation
            </h3>

            <div className="link flex text-lg text-sm flex-col sm:text-sm mt-4 2sm:text-sm sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">
              <Link className="self-end pb-2" href="/">
                Home
              </Link>
              <Link className="self-end pb-2" href="/about">
                About us
              </Link>
              <Link className="text-right w-full pb-2" href="/">
                Blogs
              </Link>
            </div>
          </div>
        </div>

        <hr className="w-[70%] mx-auto" />
        <div className="copy text-base text-sm flex items-center justify-around mt-4 sm:text-xs 2sm:text-sm md:text-base">
          <p>Copyright &copy 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
{
  /* // <div className="bg-black mt-10">
    //   <div className="p-10  flex items-center justify-around xs:flex-col xs:gap-6 sm:flex-col sm:gap-6 md:flex md:flex-row md:items-center">
    //     <div className="logo ">
    //       <Image width={120} height={120} alt="logo" src={logo.src} />
    //     </div>

        <div className="socials flex items-center  gap-10 ">
          <Image width={32} height={32} alt="facebook" src={facebook.src} />
          <Image width={32} height={32} alt="google" src={google.src} />
          <Image width={32} height={32} alt="twitter" src={twitter.src} />
          <Image width={32} height={32} alt="linkedin" src={linkedin.src} />
        </div>
      </div>

    //   <div className="links">
    //     <div className="company"></div>
    //   </div>
    // </div> */
}
