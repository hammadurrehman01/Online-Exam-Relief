"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";

const EaUrlPin = ({
  MainHeading,
  Card_one_title,
  Card_one_description,
  Card_one_hover_title,
  Card_one_href,
  Card_two_title,
  Card_two_description,
  Card_two_hover_title,
  Card_two_href,
  Card_three_title,
  Card_three_description,
  Card_three_hover_title,
  Card_three_href,
}: any) => {
  return (
    <div className="mt-10 mx-auto max-w-screen-xl">
      <h2 className="text-center font-bold md:text-4xl text-2xl">
        {MainHeading}
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 p-4 sm:gap-3 gap-6">
        <div>
          <PinContainer title={Card_one_hover_title} href={Card_one_href}>
            <div className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-zinc-900 dark:text-zinc-200">
                {Card_one_title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-muted-foreground ">
                  {Card_one_description}
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4  bg-gradient-to-br from-[#000000] to-[#52A39F]" />
            </div>
          </PinContainer>
        </div>

        <div>
          <PinContainer title={Card_two_hover_title} href={Card_two_href}>
            <div className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-zinc-900 dark:text-zinc-200">
                {Card_two_title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-muted-foreground ">
                  {Card_two_description}
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4  bg-gradient-to-br from-[#000000] to-[#52A39F]" />
            </div>
          </PinContainer>
        </div>

        <div>
          <PinContainer title={Card_three_hover_title} href={Card_three_href}>
            <div className=" flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-zinc-900 dark:text-zinc-200">
                {Card_three_title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-muted-foreground ">
                  {Card_three_description}
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4  bg-gradient-to-br from-[#000000] to-[#52A39F]" />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default EaUrlPin;
