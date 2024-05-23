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
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      boxShadow: {
        "inset-custom": "inset 0 0 0 0.1rem rgb(25, 25, 25)",
        "inset-custom4": "inset 0 0 0 0.1rem #dddddd",
        "inset-custom3": "inset 0 0 0 0.1rem #9e591b",
        "inset-custom2": "inset 0 0 0 0.2rem rgb(222, 222, 222)",
      },
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
        team: "url('../public/team/team1.jpg')",
        team2: "url('../public/team/team2.jpg')",
        team3: "url('../public/team/team3.jpg')",
        team4: "url('../public/team/team4.jpg')",
        // team5: "url('../public/team/team5.jpg')",
        team6: "url('../public/team/team6.jpg')",
        team7: "url('../public/team/team7.png')",
        team8: "url('../public/team/team8.jpg')",
        team9: "url('../public/team/team9.jpg')",
        form: "url('../public/form.jpg')",
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
