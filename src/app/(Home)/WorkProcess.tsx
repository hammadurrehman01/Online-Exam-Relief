"use client";

import Image from "next/image";
import React from "react";

function WorkProcess({
  Main_heading,
  Card_one_icon,
  Card_one_title,
  Card_one_description,
  Card_two_icon,
  Card_two_title,
  Card_two_description,
  Card_three_icon,
  Card_three_title,
  Card_three_description,
  Card_four_icon,
  Common_icon,
  Card_four_title,
  Card_four_description,
}: any) {
  return (
    <div className="mt-12 mx-auto max-w-screen-xl">
      <h2 className="text-center font-bold text-5xl ">{Main_heading}</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5 p-2 md:p-5 scale-95 md:scale-100 ">
        <div className="group">
          <div className="group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-500 delay-400 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-5">
            <div className="pt-5 flex items-center justify-around">
              <Image
                loading="eager"
                src={Card_one_icon || "/check-out.png"}
                width={80}
                height={80}
                alt="howitworks"
              ></Image>
              <Image
                loading="eager"
                className="grayscale"
                src={Common_icon || "/right-arrow.png"}
                width={32}
                height={32}
                alt="arrow"
              ></Image>
            </div>
            <h2 className=" mt-8 text-lg md:text-2xl font-bold text-zinc-100">
              {Card_one_title}
            </h2>
            <p className="mt-2 font-medium text-sm md:text-base text-zinc-100">
              {Card_one_description}
            </p>
          </div>
        </div>

        <div className="group">
          <div className="group-hover:scale-105 group-hover:shadow-xl transition ease-in duration-500 delay-400 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-5">
            <div className="pt-5 flex items-center justify-around">
              <Image
                loading="eager"
                src={Card_two_icon || "/delivery-service.png"}
                width={80}
                height={80}
                alt="howitworks"
              ></Image>
              <Image
                loading="eager"
                className="grayscale"
                src={Common_icon || "/right-arrow.png"}
                width={32}
                height={32}
                alt="arrow"
              ></Image>
            </div>
            <h2 className=" mt-8 text-lg md:text-2xl font-bold text-zinc-100">
              {Card_two_title}
            </h2>
            <p className="mt-2  font-medium text-sm md:text-base text-zinc-100">
              {Card_two_description}
            </p>
          </div>
        </div>

        <div className="group">
          <div className="group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-500 delay-400 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-5">
            <div className="pt-5 flex items-center justify-around">
              <Image
                loading="eager"
                src={Card_three_icon || "/complete.png"}
                width={80}
                height={80}
                alt="howitworks"
              ></Image>
              <Image
                loading="eager"
                className="grayscale"
                src={Common_icon || "/right-arrow.png"}
                width={32}
                height={32}
                alt="arrow"
              ></Image>
            </div>
            <h2 className=" mt-8 text-lg md:text-2xl font-bold text-zinc-100">
              {Card_three_title}
            </h2>
            <p className="mt-2  font-medium text-sm md:text-base text-zinc-100">
              {Card_three_description}
            </p>
          </div>
        </div>

        <div className="group">
          <div className="group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-500 delay-400 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] p-5">
            <div className="pt-5 flex items-center justify-around">
              <Image
                loading="eager"
                src={Card_four_icon || "/feedback.png"}
                width={80}
                height={80}
                alt="howitworks"
              ></Image>
              <Image
                loading="eager"
                className="grayscale"
                src={Common_icon || "/right-arrow.png"}
                width={32}
                height={32}
                alt="arrow"
              ></Image>
            </div>
            <h2 className=" mt-8 text-lg md:text-2xl font-bold text-zinc-100">
              {Card_four_title}
            </h2>
            <p className="mt-2  font-medium text-sm md:text-base text-zinc-100">
              {Card_four_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
