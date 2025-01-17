"use client";

import React from "react";
import BannerForm from "./BannerForm";
import Image from "next/image";
import Link from "next/link";

function Banner({
  MainHeading,
  SubHeading,
  SubHeading_two,
  Bullet1_icon,
  Bullet2_icon,
  Bullet3_icon,
  Ordernowbtn_icon,
  Ordernowbtn_title,
  Ordernowbtn_link,
  Chatonwhatsappbtn_icon,
  Chatonwhatsappbtn_title,
  Chatonwhatsappbtn_link,
  Formtopbar,
  Form_heading_word_one,
  Form_heading_word_two,
  Form_heading_word_three,
  Form_heading_word_four,
  Form_heading_word_five,
  Form_heading_word_six,
  Formbutton,
}: any) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed] dark:bg-gradient-to-b dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97]" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative max-w-screen-xl container mx-auto px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
        <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
          <div className="pt-24">
            <h1 className="text-3xl font-bold tracking-tight lg:text-left text-center text-white sm:text-4xl md:text-5xl">
              {MainHeading}
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight text-white lg:text-left text-center sm:text-3xl md:text-4xl pt-3">
              {SubHeading}
            </h2>
            <p className="mt-6 text-lg text-white max-w-prose text-left">
              {SubHeading_two}
            </p>

            <div
              className="grid lg:grid-cols-3 grid-cols-1 mt-6 items-center px-2  gap-5 py-5 bg-[#f4f4f5f3] 
            lg:w-[550px] justify-center rounded-xl"
            >
              <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
                <a href="#">
                  <Image
                    className="lg:translate-y-[12px]"
                    src={Bullet1_icon || "/bark.webp"}
                    alt="bark"
                    width={100}
                    height={100}
                  />
                  <div className="mt-4 lg:translate-y-1">⭐⭐⭐⭐⭐</div>
                </a>
              </div>

              <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
                <a href="#">
                  <Image
                    className="lg:translate-y-[5px]"
                    src={Bullet2_icon || "/brownbook.png"}
                    alt="brownbook"
                    width={140}
                    height={140}
                  />
                  <div className="lg:translate-y-[8px]">⭐⭐⭐⭐⭐</div>
                </a>
              </div>

              <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
                <div>
                  <a href="#">
                    <Image
                      className="lg:-translate-x-4"
                      src={Bullet3_icon || "/logo (1).png"}
                      alt="logo"
                      width={140}
                      height={140}
                    />
                    <span>⭐⭐⭐⭐⭐</span>
                  </a>
                </div>
              </div>
            </div>

            <CtaButtons
              Ordernowbtn_icon={Ordernowbtn_icon}
              Ordernowbtn_title={Ordernowbtn_title}
              Ordernowbtn_link={Ordernowbtn_link}
              Chatonwhatsappbtn_icon={Chatonwhatsappbtn_icon}
              Chatonwhatsappbtn_title={Chatonwhatsappbtn_title}
              Chatonwhatsappbtn_link={Chatonwhatsappbtn_link}
            />
          </div>

          <div className="pb-5 px-5 pt-12  ">
            <BannerForm
            Formtopbar={Formtopbar}
              Form_heading_word_one={Form_heading_word_one}
              Form_heading_word_two={Form_heading_word_two}
              Form_heading_word_three={Form_heading_word_three}
              Form_heading_word_four={Form_heading_word_four}
              Form_heading_word_five={Form_heading_word_five}
              Form_heading_word_six={Form_heading_word_six}
              Formbutton={Formbutton}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
    </section>
  );
}

export default Banner;

export function CtaButtons({
  Ordernowbtn_icon,
  Ordernowbtn_title,
  Ordernowbtn_link,
  Chatonwhatsappbtn_icon,
  Chatonwhatsappbtn_title,
  Chatonwhatsappbtn_link,
}: any) {
  return (
    <div className="flex flex-col md:flex-row lg:justify-start justify-center items-center mt-5 scale-90 md:scale-100">
      <Link href={Ordernowbtn_link || "/order-now"}>
        <div
          className="flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
    transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-lg  m-2"
        >
          <Image
            src={Ordernowbtn_icon || "/fulfillment.png"}
            width={30}
            height={30}
            alt="order"
          />
          <button className="font-medium ml-2 text-zinc-800 md:text-base text-sm ">
            {Ordernowbtn_title}
          </button>
        </div>
      </Link>

      <Link
        href={
          Chatonwhatsappbtn_link ||
          "https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="flex justify-center items-center border-[2px] bg-zinc-100 
transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-[11px] px-4 rounded-lg m-2"
        >
          <Image
            src={Chatonwhatsappbtn_icon || "/whatsapp.png"}
            width={25}
            height={25}
            alt="whatsapp"
          />
          <button className="font-medium ml-2 text-zinc-800  md:text-base text-sm">
            {Chatonwhatsappbtn_title}
          </button>
        </div>
      </Link>
    </div>
  );
}
