"use client";

import React from "react";

function OurProcess({
  MainHeading,
  Card_one_number,
  Card_one_title,
  Card_one_description,
  Card_two_number,
  Card_two_title,
  Card_two_description,
  Card_three_number,
  Card_three_title,
  Card_three_description,
  Card_four_number,
  Card_four_title,
  Card_four_description,
}: any) {
  return (
    <div className="mx-auto max-w-screen-xl mt-10">
      <h2 className="text-center py-2 text-4xl font-bold">{MainHeading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        <div className="relative group p-6 rounded-lg shadow-lg bg-gradient-to-t from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-t dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] hover:scale-105 transition-all duration-300">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-600 transition-all duration-500">
            {Card_one_number}
          </div>
          <h3 className="text-xl text-zinc-100 font-bold  mb-2 text-center ">
            {Card_one_title}
          </h3>
          <p className=" text-sm text-center text-zinc-100 group-hover:font-semibold ">
            {Card_one_description}
          </p>
        </div>

        <div className="relative group p-6 rounded-lg shadow-lg bg-gradient-to-t from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-t dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] hover:scale-105 transition-all duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-600 transition-all duration-500">
            {Card_two_number}
          </div>
          <h3 className="text-xl text-zinc-100 font-bold  mb-2 text-center ">
            {Card_two_title}
          </h3>
          <p className=" text-sm text-center text-zinc-100 group-hover:font-semibold ">
            {Card_two_description}
          </p>
        </div>

        <div className="relative group p-6 rounded-lg shadow-lg bg-gradient-to-t from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-t dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] hover:scale-105 transition-all duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-600 transition-all duration-500">
            {Card_three_number}
          </div>
          <h3 className="text-xl text-zinc-100 font-bold  mb-2 text-center ">
            {Card_three_title}
          </h3>
          <p className=" text-sm text-center text-zinc-100 group-hover:font-semibold ">
            {Card_three_description}
          </p>
        </div>

        <div className="relative group p-6 rounded-lg shadow-lg bg-gradient-to-t from-[#a9d6e5] via-[#89c2d9] to-[#5390d9] dark:bg-gradient-to-t dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] hover:scale-105 transition-all duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-600 transition-all duration-500">
            {Card_four_number}
          </div>
          <h3 className="text-xl text-zinc-100 font-bold  mb-2 text-center ">
            {Card_four_title}
          </h3>
          <p className=" text-sm text-center text-zinc-100 group-hover:font-semibold ">
            {Card_four_description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
