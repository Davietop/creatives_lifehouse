import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Image } from "@nextui-org/react";

import Crm from "../public/crm.jpg";

const style2 = {
  background: "rgba(255, 255, 255,0.1)",
  backdropFilter: "blur(5.9px)",
  WebkitBackdropFilter: "blur(5.9px)",
};

export function CardWithForm({ data }) {
  return (
    <Card className=" border-2  shadow   bg-cover bg-center bg-no-repeat  xs:w-10/12 sm:w-[320px] md:w-[320px] rounded-xl shadow  ">
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
      <CardContent className="text-center text-xs ">{data.content}</CardContent>
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
