"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Aos from "aos";

function BlogsBanner() {
  const { theme } = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    Aos.init({
      duration: 800,
      disable: "mobile",
      offset: 100,
    });
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${
        theme === "light"
          ? "m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100"
          : " -z-10 m-h-[500px] w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] "
      }`}
    >
      <div className="mx-auto max-w-screen-xl ">
        <div className="py-20 px-5 md:py-44">
          <div className="text-center text-2xl md:text-5xl font-extrabold">
            Blogs
          </div>
          <div className="max-w-screen-md mx-auto text-center  pt-4 font-medium dark:text-zinc-100 text-zinc-900 sm:text-lg text-sm ">
          Our blog platform offers expert insights, helpful tips, and comprehensive guidance across various topics. We deliver high-quality, engaging content to support your learning journey, with a team of skilled writers dedicated to inspiring, educating, and empowering our audience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsBanner;
