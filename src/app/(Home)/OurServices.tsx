"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function OurServices({
  top_bar,
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
  Card_four_title,
  Card_four_description,
  button_title,
  button_link,
}: any) {
  return (
    <div className="mt-10 mx-auto max-w-screen-xl">
      <div className="flex justify-center items-center">
        <div className="rounded-full px-3 py-1 bg-gradient-to-br from-[#00b4d8] via-[#4361ee] to-[#023047] text-zinc-100 text-center w-72">
          {top_bar}
        </div>
      </div>
      <h2 className="text-center pt-5 font-bold text-5xl">{Main_heading}</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-3 mt-5">
        <div className="group">
          <div className="p-4 scale-95 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9]  dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_one_icon || "/maths.png"}
                width={80}
                height={80}
                alt="tasklist"
              ></Image>
            </div>
            <h2 className="text-center pt-2 font-bold text-xl">
              {Card_one_title}
            </h2>
            <p className="text-center font-medium px-5 pt-3">
              {Card_one_description}
            </p>
          </div>
        </div>

        <div className="group">
          <div className="p-4 scale-95 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9]   dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_two_icon || "/science.png"}
                width={80}
                height={80}
                alt="tasklist"
              ></Image>
            </div>
            <h2 className="text-center pt-2 font-bold text-xl">
              {Card_two_title}
            </h2>
            <p className="text-center font-medium px-5 pt-3">
              {Card_two_description}
            </p>
          </div>
        </div>

        <div className="group">
          <div className="p-4 scale-95 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9]   dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_three_icon || "/copy-writing.png"}
                width={80}
                height={80}
                alt="tasklist"
              ></Image>
            </div>
            <h2 className="text-center pt-2 font-bold text-xl">
              {Card_three_title}
            </h2>
            <p className="text-center font-medium px-5 pt-3">
              {Card_three_description}
            </p>
          </div>
        </div>

        <div className="group">
          <div className="p-4 scale-95 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9]   dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_four_icon || "/data-science.png"}
                width={80}
                height={80}
                alt="tasklist"
              ></Image>
            </div>
            <h2 className="text-center pt-2 font-bold text-xl">
              {Card_four_title}
            </h2>
            <p className="text-center font-medium px-5 pt-3">
              {Card_four_description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link href={button_link || "/order-now"}>
          <div className="px-5 py-3 text-center bg-gradient-to-br from-[#00b4d8] via-[#4361ee] to-[#023047] border-[2px] text-zinc-200 border-white rounded-lg overflow-hidden relative group">
            <div className="whitespace-nowrap group-hover:animate-marquee">
              {button_title}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default OurServices;
