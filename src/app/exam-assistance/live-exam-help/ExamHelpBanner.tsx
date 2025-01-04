"use client"
import React from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import Image from 'next/image'
import { motion } from "framer-motion";
import { CtaButtons } from '../../(Home)/Banner';
import BannerForm from '../../(Home)/BannerForm';

function ExamHelpBanner() {
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
   className="relative overflow-hidden dark:text-zinc-100 text-zinc-800">

  <div className="relative max-w-screen-xl container mx-auto px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
    <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
      <div className='lg:pt-24 pt-12'>
      <h1 className="text-xl font-bold lg:text-left text-center  sm:text-4xl md:text-5xl">
      Excel in Your Exams with Live Exam Help!
      </h1>
      <h2 className="text-lg font-semibold lg:text-left text-center sm:text-3xl md:text-4xl pt-1 lg:pt-3">
      Master Your Exams with Affordable Live Exam Help      </h2>
      <p className="mt-2 lg:mt-5 md:text-base text-sm lg:text-left text-center">
      Our mission is to revolutionize live exam support with innovative solutions and outstanding assistance for students.</p>

      <div className="grid lg:grid-cols-3 grid-cols-1 mt-6 items-center px-2  gap-5 py-5 bg-[#f4f4f5f3] 
          lg:w-[550px] justify-center lg:scale-100 scale-75 rounded-xl border border-zinc-800 dark:border-zinc-100 shadow-xl">
            <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
              <a href="#">
                <Image className="lg:translate-y-[12px]" src="/bark.webp" alt="bark"  width={100} height={100} />
                <div className="mt-4 lg:translate-y-1">⭐⭐⭐⭐⭐</div>
              </a>
            </div>

            <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
              <a href="#">
                <Image
                 className="lg:translate-y-[5px]"
                  src="/brownbook.png"
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
                    src="/logo (1).png"
                    alt="logo"
                    width={140}
                    height={140}
                  />
                  <span>⭐⭐⭐⭐⭐</span>
                </a>
              </div>
            </div>
      </div>

      <CtaButtons/>
      </div>

     
      <div className="pb-5 px-5 pt-12  ">
      <BannerForm />
      </div>
    </div>
  </div>
  
</motion.div>
</AuroraBackground>
  )
}

export default ExamHelpBanner