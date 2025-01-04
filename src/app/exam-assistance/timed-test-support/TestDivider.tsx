"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import { CtaButtons } from "../../(Home)/Banner";

function TestDivider({
  MainHeading,
  Whatsapp_button_icon,
  Whatsapp_button_title,
  Whatsapp_button_link,
  Ordernow_button_icon,
  Ordernow_button_title,
  Ordernow_button_link,
}: any) {
  return (
    <div className="my-10 dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-t from-zinc-300 to-[#77BBB8]">
      <div className="p-5 mx-auto max-w-screen-xl mt-10">
        <TextGenerateEffect words={MainHeading} />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 p-3 ">
          <CtaButtons
            Chatonwhatsappbtn_icon={Whatsapp_button_icon}
            Chatonwhatsappbtn_title={Whatsapp_button_title}
            Chatonwhatsappbtn_link={Whatsapp_button_link}
            Ordernowbtn_icon={Ordernow_button_icon}
            Ordernowbtn_title={Ordernow_button_title}
            Ordernowbtn_link={Ordernow_button_link}
          />
        </div>
      </div>
    </div>
  );
}

export default TestDivider;
