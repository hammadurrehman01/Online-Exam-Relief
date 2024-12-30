"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function EaFaq({
  Main_heading,
  faq_one_title,
  faq_one_description,
  faq_two_title,
  faq_two_description,
  faq_three_title,
  faq_three_description,
  faq_four_title,
  faq_four_description,
  faq_five_title,
  faq_five_description,
  faq_six_title,
  faq_six_description,
  faq_seven_title,
  faq_seven_description,
  faq_eight_title,
  faq_eight_description,
}: any) {
  return (
    <div className="mx-auto max-w-screen-xl my-20">
      <h2 className="text-center text-5xl font-extrabold">{Main_heading}</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 p-4 gap-3 mt-5">
        <div>
          <Accordion className="space-y-3" type="single" collapsible>
            <AccordionItem
              className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
              value="item-1"
            >
              <AccordionTrigger className="text-lg font-semibold">
                {faq_one_title}
              </AccordionTrigger>
              <AccordionContent>{faq_one_description}</AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
              value="item-2"
            >
              <AccordionTrigger className="text-lg font-semibold">
                {faq_two_title}
              </AccordionTrigger>
              <AccordionContent>{faq_two_description}</AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
              value="item-3"
            >
              <AccordionTrigger className="text-lg font-semibold">
                {faq_three_title}
              </AccordionTrigger>
              <AccordionContent>{faq_three_description}</AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
              value="item-4"
            >
              <AccordionTrigger className="text-lg font-semibold">
                {faq_four_title}
              </AccordionTrigger>
              <AccordionContent>{faq_four_description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <Accordion className="space-y-3" type="single" collapsible>
            <AccordionItem
              className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
              value="item-5"
            >
              <AccordionTrigger className="text-lg font-semibold">
                {faq_five_title}
              </AccordionTrigger>
              <AccordionContent>{faq_five_description}</AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
              value="item-6"
            >
              <AccordionTrigger className="text-lg font-semibold">
                {" "}
                {faq_six_title}
              </AccordionTrigger>
              <AccordionContent>{faq_six_description}</AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
              value="item-7"
            >
              <AccordionTrigger className="text-lg font-semibold">
                {faq_seven_title}
              </AccordionTrigger>
              <AccordionContent>{faq_seven_description}</AccordionContent>
            </AccordionItem>

            <AccordionItem
              className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
              value="item-8"
            >
              <AccordionTrigger className="text-lg font-semibold">
                {faq_eight_title}
              </AccordionTrigger>
              <AccordionContent>{faq_eight_description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default EaFaq;
