"use client";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import sendContactForm from "@/lib/api";
import { Button } from "@nextui-org/react";
import { fontSans, open_Sans, poppins } from "@/fonts";
const variants = ["underlined"];
const variants2 = ["bordered"];

const initData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const style2 = {
  // background: "rgba(255, 255, 255,0.1)",
  // backdropFilter: "blur(1.9px)",
  // WebkitBackdropFilter: "blur(1.9px)",
};

const initState = { values: initData };

export default function ContactForm() {
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    return setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.dataset.tab]: e.target.value,
      },
    }));
  };

  const submit = async function (e) {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const res = await sendContactForm(state.values);
      if (res.sucess) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
      }
    } catch (error) {
      alert("Message Not Sent");
    }
  };

  const { values, isLoading } = state;

  return (
    <div
      className={cn(
        "bg-contact_bg3 bg-cover bg-no-repeat bg-center flex flex-col  mt-16   ",
        fontSans.className
      )}
    >
      <div style={style2} className="pb-20">
        <div className="flex gap-4 ml-6 md:ml-10 xl:ml-20  ">
          <div className="flex mt-10 items-center justify-center ">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to left, #283d3b, #203d29, #30390b, #4c2d00, #670c04)",
              }}
              className="h-[2px]  w-[50px] "
            ></div>
            <div
              className=""
              style={{
                borderLeft: "2px solid green",
                height: "18px",
              }}
            ></div>
          </div>
          <h1
            className={cn(
              "decoration-4 font-[700]   text-center sm:text-lg xs:text-base md:text-xl mt-10"
            )}
          >
            Contact Us
          </h1>
        </div>
        <div className="w-10/12 xl:w-9/12 mx-auto">
          <div className="mt-6 text-base">
            <p className="font-[500] text-base md:text-lg">
              Is the answer to your question missing?
            </p>

            <p>Get In touch with us</p>
          </div>

          <div className="flex justify-between gap-10  w-full md:mt-20 xs:mt-10 ">
            <div className="xs:hidden md:flex information w-4/12  flex flex-col gap-8 md:w-5/12 ">
              <div className="flex flex-col gap-2">
                <p className="font-[500]">EMAIL</p>
                <p>info@lifehouse.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-[500]">PHONE</p>
                <p>09045308923</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-[500]">MEETING HOURS</p>
                <p>Monday to Friday 9:00AM - 8:00PM</p>
              </div>
            </div>
            <div className="form w-5/12 xs:w-full  md:w-6/12">
              <div className="w-full flex flex-col">
                {variants.map((variant) => (
                  <div
                    key={variant}
                    className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 xs:gap-4 md:gap-10"
                  >
                    <Input
                      className="inputbox"
                      style={{
                        borderBottomStyle: "none",
                      }}
                      type="name"
                      variant={variant}
                      label="Full Name"
                      data-tab="name"
                      onChange={handleChange}
                    />
                    <Input
                      className="inputbox"
                      style={{
                        borderBottomStyle: "none",
                      }}
                      type="email"
                      variant={variant}
                      label="Email"
                      data-tab="email"
                      onChange={handleChange}
                    />
                    <Input
                      className="inputbox"
                      style={{
                        borderBottomStyle: "none",
                      }}
                      type="subject"
                      variant={variant}
                      label="Subject"
                      data-tab="subject"
                      onChange={handleChange}
                    />
                    <div className="w-full ">
                      {variants2.map((variant) => (
                        <Textarea
                          data-tab="message"
                          onChange={handleChange}
                          minRows={6}
                          key={variant}
                          variant={variant}
                          label="Description"
                          labelPlacement="outside"
                          placeholder="Enter your description"
                          className="col-span-12 md:col-span-6 mb-10 mt-6 md:mb-0 inputbox"
                        />
                      ))}
                    </div>

                    <Button
                      isLoading={isLoading}
                      className="bg-[#9e591b] text-white p-6 rounded-xl"
                      onClick={submit}
                      disabled={
                        !values.name ||
                        !values.email ||
                        !values.subject ||
                        !values.message
                      }
                    >
                      Submit
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
