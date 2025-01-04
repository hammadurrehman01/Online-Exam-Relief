"use client";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import { motion } from "framer-motion";
import { CtaButtons } from "../../(Home)/Banner";
import BannerForm from "../../(Home)/BannerForm";

function TimedTestBanner({
  MainHeading,
  SubHeading,
  Paragraph,
  Icon_one,
  Icon_two,
  Icon_three,
  Whatsapp_icon,
  Whatsapp_title,
  Whatsapp_link,
  Ordernow_icon,
  Ordernow_title,
  Ordernow_link,
  Form_topbar,
  Form_heading_word_one,
  Form_heading_word_two,
  Form_heading_word_three,
  Form_heading_word_four,
  Form_heading_word_five,
  Form_button,
}: any) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden dark:text-zinc-100 text-zinc-800"
      >
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed] dark:bg-gradient-to-b dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97]" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="relative max-w-screen-xl container mx-auto px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
            <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
              <div className="pt-24">
                <h1 className="text-2xl font-bold tracking-tight lg:text-left text-center text-white sm:text-3xl md:text-4xl">
                  {MainHeading}
                </h1>
                <h2 className="text-xl font-semibold tracking-tight text-white lg:text-left text-center sm:text-2xl md:text-3xl pt-3">
                  {SubHeading}
                </h2>
                <p className="mt-6 text-base text-white max-w-prose text-left">
                  {Paragraph}
                </p>

                <div
                  className="grid lg:grid-cols-3 grid-cols-1 mt-6 items-center px-2  gap-5 py-5 bg-[#f4f4f5f3] 
            lg:w-[550px] justify-center rounded-xl"
                >
                  <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
                    <a href="#">
                      <Image
                        className="lg:translate-y-[12px]"
                        src={Icon_one || "/bark.webp"}
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
                        src={Icon_two || "/brownbook.png"}
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
                          src={Icon_three || "/logo (1).png"}
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
                  Ordernowbtn_icon={Whatsapp_icon}
                  Ordernowbtn_title={Whatsapp_title}
                  Ordernowbtn_link={Whatsapp_link}
                  Chatonwhatsappbtn_icon={Ordernow_icon}
                  Chatonwhatsappbtn_title={Ordernow_title}
                  Chatonwhatsappbtn_link={Ordernow_link}
                />
              </div>

              <div className="pb-5 px-5 pt-12  ">
                <BannerForm
                  Formtopbar={Form_topbar}
                  Formbutton={Form_button}
                  Form_heading_word_one={Form_heading_word_one}
                  Form_heading_word_two={Form_heading_word_two}
                  Form_heading_word_three={Form_heading_word_three}
                  Form_heading_word_four={Form_heading_word_four}
                  Form_heading_word_five={Form_heading_word_five}
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
        </section>
      </motion.div>
    </AuroraBackground>
  );
}

export default TimedTestBanner;
