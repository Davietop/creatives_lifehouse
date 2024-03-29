import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo({ queries, value }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={`key${value}`} key={value}>
        <AccordionTrigger className="text-left">
          {queries.question}
        </AccordionTrigger>
        <AccordionContent className="text-left">
          {queries.answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
