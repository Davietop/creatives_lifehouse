import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Image } from "@nextui-org/react";

import Crm from "../public/crm.jpg";

// const style2 = {
//   background: "rgba(255, 255, 255,0.1)",
//   backdropFilter: "blur(5.9px)",
//   WebkitBackdropFilter: "blur(5.9px)",
// };

const style = {
  /* From https://css.glass */
  background: "rgba(255, 255, 255, 1)",
  // borderRadius: 16px;
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(20px)",
  webkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};

export function CardWithForm({ data }) {
  return (
    <Card
      style={style}
      className=" border-2  shadow   bg-cover bg-center bg-no-repeat  xs:w-10/12 sm:w-[320px] md:w-[320px] rounded-xl shadow  "
    >
      <CardHeader>
        <div className="flex text-sm items-center justify-center flex-col gap-6">
          <CardTitle className="text-center font-bold">{data.title}</CardTitle>
          <CardDescription>
            <Image src={data.src.src} alt="image" width={200} height={200} />
          </CardDescription>
        </div>
        <CardDescription className="text-xs font-bold text-center">
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent className=" text-center  xs:text-xs sm:text-xs  md:text-sm ">
        {data.content}
      </CardContent>
    </Card>
  );
}
// Practically:

// 1. The header
// 2. The Hero Section
// 3. Services we offer
// 4. Meet the team
// 5. Pricing
// 6. Frequently Asked Questions
// 7. Footer
