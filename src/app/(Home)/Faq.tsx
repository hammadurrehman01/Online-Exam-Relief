"use client";

import CustomFaqToolTip from "@/components/common/CustomFaqToolTip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Faq({ Main_heading, Main_image }: any) {
  const [isLoggenIn, setIsLoggedIn] = useState<boolean>(false);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState(false);

  const fetchFaqs = async () => {
    const res = await fetch("/api/faq/fetch-faq");
    if (!res.ok) {
      console.error("Failed to fetch FAQs");
      return;
    }
    const data = await res.json();
    setFaqs(data);
  };

  useEffect(() => {
    const user: any = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    if (parsedUser.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    fetchFaqs();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setTooltipIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className="col-span-2 h-[470px] overflow-y-scroll ">
          <Accordion className="space-y-3" type="single" collapsible>
            {faqs?.map((faq: any, index: any) => (
              <AccordionItem
                className="bg-gradient-to-bl from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] text-gray-100 dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-2 rounded-lg"
                value={faq.question}
                key={faq.id}
              >
                {isLoggenIn && (
                  <div className="flex justify-end">
                    <EllipsisVertical
                      onClick={(e) => {
                        e.stopPropagation();
                        setTooltipIndex(tooltipIndex === index ? null : index);
                      }}
                      className="cursor-pointer text-xs"
                    />
                  </div>
                )}
                {tooltipIndex === index && (
                  <div ref={tooltipRef}>
                    <CustomFaqToolTip
                      faqs={faqs}
                      setFaqs={setFaqs}
                      setTooltipIndex={setTooltipIndex}
                      index={index}
                      modal={modal}
                      setModal={setModal}
                    />
                  </div>
                )}

                <AccordionTrigger className="text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq;
