"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function KnowUs({
  MainHeading,
  SubHeading,
  Bullet_one_icon,
  Bullet_one_title,
  Bullet_one_description,
  Bullet_two_icon,

  Bullet_two_title,
  Bullet_two_description,

  button_title,
  button_link,
  image_one,
  image_two,
  image_three,
}: any) {
  return (
    <div className="lg:mt-20 mt-10 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4   ">
        <div>
          <h2 className="text-3xl font-extrabold  mb-4">{MainHeading}</h2>
          <p className="text-lg  mb-4">{SubHeading}</p>
          <div className="space-y-4 lg:-translate-x-6">
            <div className="group scale-95 hover:scale-100 transition ease-in duration-200 delay-200 hover:shadow-lg  cursor-pointer px-2 py-2">
              <div className="flex items-center  gap-3">
                <Image
                  src={Bullet_one_icon || "/help-subjects.png"}
                  width={40}
                  height={40}
                  alt="help"
                ></Image>
                <h3 className="text-xl font-semibold ">{Bullet_one_title}</h3>
              </div>
              <p className="">{Bullet_one_description}</p>
            </div>

            <div className="group scale-95 hover:scale-100 transition ease-in duration-200 delay-200 hover:shadow-lg  cursor-pointer px-2 py-2">
              <div className="flex items-center gap-3">
                <Image
                  src={Bullet_two_icon || "/affordable-package.png"}
                  width={40}
                  height={40}
                  alt="help"
                ></Image>
                <h3 className="text-xl font-semibold ">{Bullet_two_title}</h3>
              </div>
              <p className="">{Bullet_two_description}</p>
            </div>

            <Link href={button_link || "/order-now"}>
              <div className="scale-95 px-6 py-3 rounded-lg bg-gradient-to-br from-[#00b4d8] via-[#4361ee] to-[#023047]  text-zinc-100  text-center font-semibold w-36 hover:scale-100 transition ease-in duration-200 delay-200 cursor-pointer">
                {button_title}
              </div>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 lg:w-80 w-56 lg:h-80 h-56 overflow-hidden rounded-lg shadow-lg border-2 border-white">
            <Image
              src={image_one || "/know-us-1.webp"}
              alt="Image 1"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute lg:top-20 top-32 lg:left-[18rem] left-[11rem] lg:w-[18rem] w-[10rem] lg:h-[18rem] h-[10rem] overflow-hidden rounded-lg shadow-lg border-2 border-white">
            <Image
              src={image_two || "/Image-parallax-2.webp"}
              alt="Image 2"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute lg:top-[22rem] top-[17rem] lg:left-[5rem] lg:w-[18rem] w-[12rem] lg:h-[18rem] h-[12rem] overflow-hidden rounded-lg shadow-lg border-2 border-white">
            <Image
              src={image_three || "/banner-3.webp"}
              alt="Image 3"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowUs;
