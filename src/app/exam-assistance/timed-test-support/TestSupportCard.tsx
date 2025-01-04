"use client"

import React from "react";
import ServiceCard from "../practice-test-preparation/ServiceCard";

function TestSupportCard({
  MainHeading,
  Card_one_title,
  Card_one_description,
  Card_one_buttonText,
  Card_two_title,
  Card_two_description,
  Card_two_buttonText,
  Card_three_title,
  Card_three_description,
  Card_three_buttonText,
  Card_four_title,
  Card_four_description,
  Card_four_buttonText,
  Card_five_title,
  Card_five_description,
  Card_five_buttonText,
}: any) {
  const services = [
    {
      title: Card_one_title,
      description: Card_one_description,
      buttonText: Card_one_buttonText,
      meteorCount: 15,
    },
    {
      title: Card_one_title,
      description: Card_one_description,
      buttonText: Card_two_buttonText,
      meteorCount: 15,
    },
    {
      title: Card_two_title,
      description: Card_two_description,
      buttonText: Card_three_buttonText,
      meteorCount: 15,
    },
    {
      title: Card_three_title,
      description: Card_three_description,
      buttonText: Card_three_buttonText,
      meteorCount: 15,
    },
    {
      title: Card_four_title,
      description: Card_four_description,
      meteorCount: 15,
    },
    {
      title: Card_five_title,
      description: Card_five_description,
      buttonText: Card_five_buttonText,
      meteorCount: 15,
    },
  ];
  return (
    <div className="mx-auto max-w-screen-xl mt-12">
      <h2 className="text-center font-extrabold lg:text-4xl text-2xl ">
        Mock Exam & Test Preparation Services
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 p-4 gap-4 my-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
            meteorCount={service.meteorCount}
          />
        ))}
      </div>
    </div>
  );
}

export default TestSupportCard;
