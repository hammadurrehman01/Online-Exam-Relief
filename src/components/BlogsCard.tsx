"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  title,
  description,
  blog_featured_image,
  blog_featured_image_alt,
  blog_slug,
}: any) => {
  const short_description = `${description?.slice(0, 150)}...`;

  return (
    <div className="">
      <Card className="cursor-pointer pb-4  ">
        <Image
          className="m-auto"
          src={blog_featured_image}
          alt={blog_featured_image_alt}
          height={100}
          width={400}
          priority
        />
        <CardHeader>
          <CardTitle className="font-medium text-xl tracking-normal">
            {title}
          </CardTitle>
          <span
            style={{
              marginTop: "1rem",
              letterSpacing: 0,
            }}
            dangerouslySetInnerHTML={{
              __html: short_description ? short_description : "",
            }}
          />
        </CardHeader>
        <CardFooter className="bg-[#6038bc] shadow-sm shadow-black hover:bg-violet-700 transition-all duration-200 w-fit rounded-md m-auto text-white px-3 py-2 text-center flex items-center hover:scale-110">
          <Link href={`${blog_slug}`}>
            <span>Read More</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
