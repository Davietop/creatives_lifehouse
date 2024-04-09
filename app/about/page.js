import AboutPage from "@/components/about";
import Message from "@/components/callback";
import Footer from "@/components/footer";
import Information from "@/components/info";

import NavAbout from "@/components/navabout";
import Slide from "@/components/pricing";

import TeamAbout from "@/components/team_about";

export default function About() {
  return (
    <div>
      <NavAbout />
      <AboutPage />
      <Information />
      <TeamAbout />

      <Message />
      {/* <Slide /> */}

      <Footer />
    </div>
  );
}
