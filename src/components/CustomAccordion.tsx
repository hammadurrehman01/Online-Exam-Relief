import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  title: string;
  description: string;
}

const CustomAccordion = ({ title, description }: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800 transition ease-in duration-150   px-4 dark:text-white hover:dark:text-black">
          {title}
        </AccordionTrigger>
        <AccordionContent className="px-4 pt-3">
          <div
            className="faq-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
