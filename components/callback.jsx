import Image from "next/image";
import tele_contact from "../public/tele_contact.png";
import location_contact from "../public/location_contact.png";
import mail_contact from "../public/mail_contact.png";
import { Button } from "@nextui-org/button";
import { cn } from "@/lib/utils";
import { fontSans, poppins } from "@/fonts";

const style = {
  /* From https://css.glass */
  background: "#f0f0f0 ",

  boxShadow: "0 4px 30px white",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid white",
};

export default function Message() {
  return (
    <div
      style={style}
      className={cn(
        " flex h-fit m-4 mt-20 mx-auto   md:w-11/12 md:h-fit   lg:h-full lg:w-9/12 xl:w-8/12  sm:w-11/12  xs:w-11/12    shadow p-3 rounded-xl  ",
        poppins.variable
      )}
    >
      <div
        className={cn(
          "container xs:hidden  h-full md:flex info  bg-[#121b1b] md:h-[460px] w-4/12 md:w-5/12 lg:w-[37%] xl:w-[33%] lg:p-6 xl:p-10 md:p-6  md:p-10  h-full flex  flex-col rounded-2xl",
          fontSans.variable
        )}
      >
        <div className="circle "></div>
        <p className={cn("text-white font-bold  text-sm ", poppins.className)}>
          Contact Information
        </p>
        <p className={cn("text-white mt-1 mb-10 text-xs ", poppins.className)}>
          lifehouse Creatives
        </p>
        <div className="flex flex-col gap-10 ">
          <div className={cn("flex gap-4 items-center ", fontSans.className)}>
            <Image src={tele_contact.src} width={24} alt="tele" height={24} />
            <p className="text-white md:text-xs xs:text-xs sm:text-sm lg:text-sm">
              +(234) 903-224-5613
            </p>
          </div>
          <div className={cn("flex gap-4 items-center ", fontSans.className)}>
            <Image src={mail_contact.src} width={24} alt="tele" height={24} />
            <p className="text-white xs:text-xs sm:text-sm md:text-xs lg:text-sm">
              info@lifehouse.com
            </p>
          </div>
          <div className={cn("flex gap-4 items-center ", fontSans.className)}>
            <Image
              src={location_contact.src}
              width={24}
              alt="tele"
              height={24}
            />
            <p className="text-white xs:text-xs sm:text-xs md:text-xs lg:text-sm">
              Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10   form xs:w-full sm:w-full md:w-8/12 xl:w-8/12 ">
        <form
          action=""
          className={cn(
            "text-sm md:mt-6 lg:mt-14 xl:mt-14 flex flex-col  items-center  gap-4",
            fontSans.className
          )}
        >
          <h1 className={cn("md:hidden self-start ml-5", fontSans.className)}>
            Message Us @Lifehouse Creatives
          </h1>

          <div className=" lg:flex flex items-center flex-col justify-center xl:flex-row md:flex-col xs:gap-4 md:gap-4 sm:gap-4 xl:gap-10  lg:gap-4 lg:flex-row sm:flex-row">
            <div class="input-wrapper ">
              <input
                className=" bg-[#f0f0f0] xs:w-[290px] sm:w-[250px] md:w-[370px] lg:w-[207px] xl:w-[220px] 2xl:w-[250px]"
                type="text"
                id="input"
                required
              ></input>
              <label for="input" class="placeholder">
                Your Name
              </label>
            </div>
            <div class="input-wrapper ">
              <input
                className=" bg-[#f0f0f0]  xs:w-[290px] sm:w-[250px] md:w-[370px] lg:w-[207px] xl:w-[220px] 2xl:w-[250px]"
                type="text"
                id="input"
                required
              ></input>
              <label for="input" class="placeholder">
                Your Email
              </label>
            </div>
          </div>

          <div className=" input-wrapper  ">
            <input
              className=" bg-[#f0f0f0]  border-1 border-2 border-[#121b1b] xs:w-[290px] sm:w-[540px] md:w-[370px] lg:w-[430px] xl:w-[480px] 2xl:w-[540px]"
              type="text"
              id="input"
              required
            ></input>
            <label for="input" className="placeholder">
              Your Subject
            </label>
          </div>
          <div class=" mt-6 ">
            <textarea
              className=" bg-[#f0f0f0] xs:w-[290px] sm:w-[540px] md:w-[370px] lg:w-[430px] xl:w-[480px] 2xl:w-[540px] border-1 border-2 border-[#121b1b] p-2"
              type="text"
              rows={7}
              cols={10}
              // id="input"
              required
              placeholder="Your Message"
            ></textarea>
          </div>

          <Button className="bg-[#121b1b] text-white w-6/12  " type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
