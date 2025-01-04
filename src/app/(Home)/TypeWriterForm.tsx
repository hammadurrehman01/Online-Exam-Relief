"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo({
  Form_heading_word_one,
  Form_heading_word_two,
  Form_heading_word_three,
  Form_heading_word_four,
  Form_heading_word_five,
  Form_heading_word_six,
}: any) {
  const words = [
    {
      text: Form_heading_word_one,
    },
    {
      text: Form_heading_word_two,
    },
    {
      text: Form_heading_word_three,
    },
    {
      text: Form_heading_word_four,
    },
    {
      text: Form_heading_word_five,
    },
    {
      text: Form_heading_word_six,
      className: "text-blue-500 dark:text-blue-400",
    },
  ];


  return (
    <div className=" ">
      <TypewriterEffectSmooth words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}
