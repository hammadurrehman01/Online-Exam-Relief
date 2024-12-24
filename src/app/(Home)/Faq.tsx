"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

function Faq({
  Main_heading,
  Main_image,
  faq_one_title,
  faq_one_description,
  faq_two_title,
  faq_two_description,
  faq_three_title,
  faq_three_description,
  faq_four_title,
  faq_four_description,
}: any) {
  return (
    <div className="mt-20 mx-auto max-w-screen-xl">
      <h2 className="text-center font-extrabold text-5xl ">{Main_heading}</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 p-4 mt-5 ">
        <div className="">
          <Image
            className="rounded-xl"
            src={Main_image || "/faq-1.webp"}
            width={600}
            height={550}
            alt="faq"
          ></Image>
        </div>
        <div className="col-span-2">
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
      </div>
    </div>
  );
}

export default Faq;
