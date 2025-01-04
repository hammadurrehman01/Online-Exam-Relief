"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React from "react";

function TimedTestimonials({
  Main_heading,
  Person_one_image,
  Person_one_name,
  Person_one_bio,
  Title_one,
  Person_two_image,
  Person_two_name,
  Person_two_bio,
  Title_two,
  Person_three_image,
  Person_three_name,
  Person_three_bio,
  Title_three,
  Person_four_image,
  Person_four_name,
  Person_four_bio,
  Title_four,
  Person_five_image,
  Person_five_name,
  Person_five_bio,
  Title_five,
}: any) {
  const testimonials = [
    {
      quote: Title_one,
      name: Person_one_name,
      designation: Person_one_bio,
      src: Person_one_image,
    },
    {
      quote: Title_two,
      name: Person_two_name,
      designation: Person_two_bio,
      src: Person_two_image,
    },
    {
      quote: Title_three,
      name: Person_three_name,
      designation: Person_three_bio,
      src: Person_three_image,
    },
    {
      quote: Title_four,
      name: Person_four_name,
      designation: Person_four_bio,
      src: Person_four_image,
    },
    {
      quote: Title_five,
      name: Person_five_name,
      designation: Person_five_bio,
      src: Person_five_image,
    },
  ];
  return (
    <div className="mx-auto max-w-screen-xl mt-20 -z-[999]">
      <h2 className="text-center mt-5 font-bold text-3xl md:text-5xl">
        {Main_heading}
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default TimedTestimonials;
