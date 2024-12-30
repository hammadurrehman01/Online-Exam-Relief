"use client";

import { Card } from "@/components/ui/card";
import React from "react";

function EaLongContent({
  Main_heading,
  Main_paragraph,
  Content_one_heading,
  Content_one_paragraph,
  Content_two_heading,
  Content_two_bullet_one,
  Content_two_bullet_two,
  Content_two_bullet_three,
  Content_two_bullet_four,
  Content_two_bullet_five,
  Content_three_heading,
  Content_three_bullet_one,
  Content_three_bullet_two,
  Content_three_bullet_three,
  Content_three_bullet_four,
  Content_three_bullet_five,
  Content_four_heading,
  Content_four_bullet_one,
  Content_four_bullet_two,
  Content_four_bullet_three,
  Content_four_bullet_four,
  Content_four_bullet_five,
  Content_five_heading,
  Content_five_bullet_one,
  Content_five_bullet_two,
  Content_five_bullet_three,
  Content_five_bullet_four,
  Content_five_bullet_five,
  Content_six_heading,
  Content_six_paragraph,
  Content_seven_heading,
  Content_seven_paragraph,
  Bottom_paragraph,
}: any) {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          {Main_heading}
        </h1>

        <Card className="shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6 sm:p-8">
            <p className="mb-6 leading-relaxed">{Main_paragraph}</p>

            <h2 className="text-2xl font-bold mb-4">{Content_one_heading}</h2>
            <p className="mb-6 leading-relaxed">{Content_one_paragraph}</p>

            <h2 className="text-2xl font-bold mb-4">{Content_two_heading}</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>{Content_two_bullet_one}</li>
              <li>{Content_two_bullet_two}</li>
              <li>{Content_two_bullet_three}</li>
              <li>{Content_two_bullet_four}</li>
              <li>{Content_two_bullet_five}</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">{Content_three_heading}</h2>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>{Content_three_bullet_one}</li>
              <li>{Content_three_bullet_two}</li>
              <li>{Content_three_bullet_three}</li>
              <li>{Content_three_bullet_four}</li>
              <li>{Content_three_bullet_five}</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">{Content_four_heading}</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>{Content_four_bullet_one}</li>
              <li> {Content_four_bullet_two}</li>
              <li>{Content_four_bullet_three}</li>
              <li>{Content_four_bullet_four}</li>
              <li>{Content_four_bullet_five}</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">{Content_five_heading}</h2>
            <ol className="list-decimal list-inside mb-6 space-y-2">
              <li>{Content_five_bullet_one}</li>
              <li>{Content_five_bullet_two}</li>
              <li>{Content_five_bullet_three}</li>
              <li>{Content_five_bullet_four}</li>
              <li>{Content_five_bullet_five}</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">{Content_six_heading}</h2>
            <p className="mb-6 leading-relaxed">{Content_six_paragraph}</p>

            <h2 className="text-2xl font-bold mb-4">{Content_seven_heading}</h2>
            <p className="mb-6 leading-relaxed">{Content_seven_paragraph}</p>

            <p className="font-semibold text-center">{Bottom_paragraph}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default EaLongContent;
