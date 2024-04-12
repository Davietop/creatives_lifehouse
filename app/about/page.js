import AboutPage from "@/components/about";
import Message from "@/components/callback";
import Footer from "@/components/footer";
import Information from "@/components/info";

import NavAbout from "@/components/navabout";

import TeamAbout from "@/components/team_about";
import Slide from "@/components/technolgies";
import ContactForm from "@/components/testingContact";

export default function About() {
  return (
    <div>
      <NavAbout />
      <AboutPage />
      <Information />
      <TeamAbout />
      <Slide />
      <ContactForm />

      <Footer />
    </div>
  );
}
