"use client";

import { RenderBuilderContent } from "@/components/builder";
import SocialShare from "@/components/common/SocialShare";
import CustomAccordion from "@/components/CustomAccordion";
import { refactorDate } from "@/lib/date";
import Image from "next/image";

const BlogDetails = ({
  title,
  description,
  blog_featured_image,
  blog_featured_image_alt,
  blog_categories,
  blog_tags,
  blog_slug,
  blog_meta_title,
  blog_meta_description,
  blog_author_name,
  blog_author_bio,
  blog_author_gravatar,
  blog_posted_date,
  custom_schema,
  faqs,
}: any) => {
  const cleanSchema = (schema: string) => {
    try {
      if (schema) {
        const schemaString = JSON.stringify(schema);
        const validSchema = schemaString
          ?.replace(/\s*}\s*{/g, "},{")
          ?.replace(/^{/, "[{")
          ?.replace(/}$/, "}]");
        return JSON.parse(validSchema);
      } else {
        console.log("Schema is not valid JSON; applying transformations...");
      }
    } catch (error: any) {
      console.error("Error parsing schema:", error.message);
      return null;
    }
  };
  const schema = cleanSchema(custom_schema);

  return (
    <div className="container max-w-[1100px] m-auto pt-3">
      <script
        type="application/ld+json"
        id="schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <meta property="og:title" content={blog_meta_title} />
      <meta property="og:description" content={blog_meta_description} />
      <meta property="og:image" content={blog_featured_image} />
      <meta
        property="og:url"
        content={`https://gogrades-testing.eduresearchers.com/blog/${blog_slug}`}
      />
      <meta property="og:title" content={blog_meta_title} />
      <meta property="og:description" content={blog_meta_description} />
      <meta property="og:image" content={blog_featured_image} />
      <meta
        property="og:url"
        content={`https://gogrades-testing.eduresearchers.com/blog/${blog_slug}`}
      />

      <h1 className="text-lg lg:text-3xl font-semibold pt-12 text-center">
        {title}
      </h1>
      <div className="flex items-center pt-16 ml-12">
        <Image
          className="rounded-full"
          src={blog_author_gravatar}
          alt="author-avatar"
          width={40}
          height={40}
        />
        <div className="ml-3">
          <p className="font-bold text-sm lg:text-lg">{blog_author_name}</p>
          <p className="text-sm lg:text-md" suppressHydrationWarning>
            {refactorDate(blog_posted_date)}
          </p>
        </div>
      </div>
      <Image
        className="m-auto mt-4"
        src={blog_featured_image}
        alt={blog_featured_image_alt}
        height={100}
        width={1000}
      />
      <span
        className="mt-4 p-5 text-md font-normal text-center lg:text-left blog-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="block lg:flex items-center gap-2 mt-4">
        <p className="text-center">Tags:</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-3 lg:pt-0 lg:px-3">
          {blog_tags?.map((tag: string, index: number) => (
            <span
              key={index}
              className="mr-2 text-center bg-[#f2f2f2] dark:text-black rounded-full p-2 mt-1 text-xs cursor-pointer "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-16">
        {faqs?.length !== 0 && (
          <h2 className="bg-violet-500 text-white rounded-lg text-center border-[1px] border-[#356a9f] p-2 text-lg font-semibold">
            Frequently Asked Questions
          </h2>
        )}
        <div className={faqs?.length !== 0 ? "pt-8" : "pt-0"}>
          {faqs?.map((faq: any, index: number) => (
            <CustomAccordion
              key={index}
              question={faq.question}
              answer={faq.answer || ""}
            />
          ))}
        </div>
      </div>
      <div className="pb-20 pt-4">
        <div className="flex items-center gap-3 justify-center mt-12">
          <Image
            className="rounded-full"
            src={blog_author_gravatar}
            alt="author-avatar"
            width={50}
            height={50}
          />
          <h2 className="font-bold text-xl">
            Author: <span> {blog_author_name}</span>
          </h2>
        </div>
        <div>
          <p className="text-center w-[80%] m-auto mt-4">{blog_author_bio}</p>
        </div>
        <SocialShare
          imageUrl={blog_featured_image_alt}
          title={title}
          description={description}
        />
      </div>
    </div>
  
  );
};

export default BlogDetails;
