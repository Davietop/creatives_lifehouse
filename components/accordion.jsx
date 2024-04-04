import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo({ queries, value }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem key={value} value={`key${value}`}>
        <AccordionTrigger
          style={{
            textDecoration: "none",
          }}
          className="xs:text-xs sm:text-sm text-left"
        >
          {queries.question}
        </AccordionTrigger>
        <AccordionContent className="xs:text-xs sm:text-sm text-left">
          {queries.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
