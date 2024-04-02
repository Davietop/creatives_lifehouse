import Image from "next/image";
import tele_contact from "../public/tele_contact.png";
import location_contact from "../public/location_contact.png";
import mail_contact from "../public/mail_contact.png";
const style = {
  /* From https://css.glass */
  background: "rgba(255, 255, 255, 1)",
  // borderRadius: 16px;
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(20px)",
  webkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};

export default function Message() {
  return (
    <div
      style={style}
      className="mx-auto mt-10 bg-white md:w-10/12 md:h-[450px] lg:w-9/12 xl:w-8/12 md:h-12 sm:w-10/12 h-[300px] xs:w-10/12 xs:h-[400px] sm:w-11/12  shadow p-3 rounded-xl"
    >
      <div className="xs:hidden md:flex info  bg-[#121b1b] w-fit xl:p-16 md:p-10 lg:p-14  h-full flex  flex-col rounded-2xl">
        <p className="text-white font-bold  text-sm ">Contact Information</p>
        <p className="text-white mt-1 mb-10 text-xs ">lifehouse Creatives</p>
        <div className="flex flex-col gap-10 ">
          <div className="flex gap-4 items-center ">
            <Image src={tele_contact.src} width={24} alt="tele" height={24} />
            <p className="text-white xs:text-xs sm:text-sm">
              +(234) 903-224-5613
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <Image src={mail_contact.src} width={24} alt="tele" height={24} />
            <p className="text-white xs:text-xs sm:text-sm">
              info@lifehouse.com
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <Image
              src={location_contact.src}
              width={24}
              alt="tele"
              height={24}
            />
            <p className="text-white xs:text-xs sm:text-sm">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="form"></div>
    </div>
  );
}
