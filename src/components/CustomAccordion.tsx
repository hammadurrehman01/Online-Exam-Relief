import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  question: string;
  answer: string;
}

const CustomAccordion = ({ question, answer }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800 transition ease-in duration-150   px-4 dark:text-white hover:dark:text-black">
          {question}
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-3">
          <div
            className="faq-description"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
