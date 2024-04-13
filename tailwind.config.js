import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "320px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        vr_Img: "url('../public/newPic.jpg')",
        bg_img: "url('../public/bg_img.jpg')",
        bg_test2: "url('../public/test2.jpg')",
        gradient: "url('../public/rhombus.jpg')",

        line1: "url('../public/linee.jpg')",

        contact_bg17: "url('../public/contact_bg17.jpg')",

        box: "url('../public/box3.png')",
        service: "url('../public/service.png')",
        faq1: "url('../public/faq1.jpg')",
        faq2: "url('../public/faq2.jpg')",
        faq3: "url('../public/faq3.avif')",
        faq4: "url('../public/faq4.jpg')",
        faq5: "url('../public/manPic.png')",
        bg_members_1: "url('../public/members/members_bg_1.jpg')",
        bg_members_2: "url('../public/members/members_bg_2.jpg')",
        bg_members_3: "url('../public/members/members_bg_3.jpg')",
        bg_members_4: "url('../public/members/members_bg_4.jpg')",
        bg_members_5: "url('../public/members/members_bg_5.jpg')",
        bg_members_6: "url('../public/members/members_bg_6.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
};
