"use client";

import Image from "next/image";
import React from "react";

function Solutions({
  MainHeading,
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
  Card_five_icon,
  Card_five_title,
  Card_five_description,
  Card_six_icon,
  Card_six_title,
  Card_six_description,
}: any) {
  return (
    <div className="mt-16 max-w-screen-xl mx-auto">
      <h2 className="text-center font-extrabold text-5xl ">{MainHeading}</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 p-3 mt-5">
        <div className="group">
          <div className="p-4 scale-95 bg-gradient-to-tl from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed]  dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px] text-gray-100 ">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_one_icon || "/task-list.png"}
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
          <div className="p-4 scale-95 bg-gradient-to-tl from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed]  dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_two_icon || "/security.png"}
                width={80}
                height={80}
                alt="server"
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
          <div className="p-4 scale-95 bg-gradient-to-tl from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed]  dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_three_icon || "/team.png"}
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
          <div className="p-4 scale-95 bg-gradient-to-tl from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed]  dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_four_icon || "/budget.png"}
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

        <div className="group">
          <div className="p-4 scale-95 bg-gradient-to-tl from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed]  dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_five_icon || "/money-back-guarantee.png"}
                width={80}
                height={80}
                alt="tasklist"
              ></Image>
            </div>
            <h2 className="text-center pt-2 font-bold text-xl">
              {Card_five_title}
            </h2>
            <p className="text-center font-medium px-5 pt-3">
              {Card_five_description}
            </p>
          </div>
        </div>

        <div className="group">
          <div className="p-4 scale-95 bg-gradient-to-tl from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed]  dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[250px] text-gray-100">
            <div className="flex justify-center items-center pt-4">
              <Image
                src={Card_six_icon || "/telephone.png"}
                width={80}
                height={80}
                alt="tasklist"
              ></Image>
            </div>
            <h2 className="text-center pt-2 font-bold text-xl">
              {Card_six_title}
            </h2>
            <p className="text-center font-medium px-5 pt-3">
              {Card_six_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
