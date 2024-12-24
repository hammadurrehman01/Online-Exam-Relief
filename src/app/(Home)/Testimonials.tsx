"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

function Testimonials({
  Main_heading,
  Testimonial_one_title,
  Testimonial_one_name,
  Testimonial_two_title,
  Testimonial_two_name,
  Testimonial_three_title,
  Testimonial_three_name,
  Testimonial_four_title,
  Testimonial_four_name,
  Testimonial_five_title,
  Testimonial_five_name,
}: any) {
  const testimonials = [
    {
      quote: Testimonial_one_title,
      name: Testimonial_one_name,

      rating: 5,
    },
    {
      quote: Testimonial_two_title,
      name: Testimonial_two_name,

      rating: 5,
    },
    {
      quote: Testimonial_three_title,
      name: Testimonial_three_name,

      rating: 5,
    },
    {
      quote: Testimonial_four_title,
      name: Testimonial_four_name,

      rating: 5,
    },
    {
      quote: Testimonial_five_title,
      name: Testimonial_five_name,

      rating: 5,
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-screen-xl mt-20">
        <h2 className="text-center font-bold text-5xl ">{Main_heading}</h2>
        <div className="mt-10 mb-20 rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
