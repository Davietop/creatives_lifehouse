import Hubspot from "../public/technologies/hubspot.png";
import Saleforce from "../public/technologies/saleforce.png";
import HighLevel from "../public/technologies/highlogo.png";
import Zoho from "../public/technologies/zoho.svg";
import Wordpress from "../public/technologies/wordpress.png";
import Wix from "../public/technologies/wix.png";
import Godaddy from "../public/technologies/godaddy.png";
import Squarespace from "../public/technologies/squarespace.png";
import Webflow from "../public/technologies/webflow.png";
// import Ahrefs from "../public/technologies/ahref.svg";
import Semrush from "../public/technologies/semrush.png";
// import Mailchimp from "../public/technologies/Mailchimp_logo.png";
import Image from "next/image";

// hubspot, saleforce, go highlevel, zoho createMotionComponent,wordpress, wix, godaddy, squarespace, webflow, ahrefs, sm Rubik_Doodle_Shadow, mailchimp

const src = [
  Hubspot.src,
  HighLevel.src,
  Zoho.src,
  Saleforce.src,
  Godaddy.src,

  Squarespace.src,
  Wordpress.src,
  Webflow.src,
  Semrush.src,
  // Mailchimp.src,
  Wix.src,
];

export default function Technology() {
  return (
    <div
      style={{
        overflow: "scroll",
        overflowY: "hidden",
        overflowX: "auto",
        border: "none",
      }}
      className="scrolled scroll-smooth w-10/12 mt-10 mb-10 mx-auto"
    >
      <div className="flex gap-[50px] items-center">
        {src.map((data, i) => {
          return (
            <Image key={i} src={data} width={140} alt="img" height={140} />
          );
        })}
      </div>
    </div>
  );
}
