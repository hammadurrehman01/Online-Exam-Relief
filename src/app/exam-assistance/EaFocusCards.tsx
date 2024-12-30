"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

function EaFocusCards({
  Main_heading,
  Card_one_title,
  Card_one_image,
  Card_two_title,
  Card_two_image,
  Card_three_title,
  Card_three_image,
  Card_four_title,
  Card_four_image,
  Card_five_title,
  Card_five_image,
  Card_six_title,
  Card_six_image,
}: any) {
  const cards = [
    {
      title: Card_one_title,
      src: Card_one_image || "/exam-card-1.webp",
    },
    {
      title: Card_two_title,
      src: Card_two_image || "/exam-card-2.webp",
    },
    {
      title: Card_three_title,
      src: Card_three_image || "/exam-card-3.webp",
    },
    {
      title: Card_four_title,
      src: Card_four_image || "/exam-card-4.webp",
    },
    {
      title: Card_five_title,
      src: Card_five_image || "/exam-card-5.webp",
    },
    {
      title: Card_six_title,
      src: Card_six_image || "/exam-card-6.webp",
    },
  ];
  return (
    <div className="mt-10 mx-auto max-w-screen-xl">
      <h1 className="font-bold md:text-5xl text-3xl text-center">
        {Main_heading}
      </h1>
      <div className="mt-8 p-5">
        <FocusCards cards={cards} />
      </div>
      <h1 />
    </div>
  );
}

export default EaFocusCards;
