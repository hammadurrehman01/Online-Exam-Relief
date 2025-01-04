import { Metadata } from "next";
import Head from "next/head";
import Blogs from "./Blogs";
import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
import BlogCard from "@/components/BlogsCard";
import { getBlogs } from "@/lib/getContent";

export const metadata: Metadata = {
  title: "Blogs",
  description: `All Blogs`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/blogs",
  },
};

const Page = async () => {
  <Head>
    <title>Blogs</title>
  </Head>;

  const content = await getBlogs();

  if (!content) {
    console.error("Blog data is null. Rendering fallback UI.");
    return <div>Failed to load data. Please try again later.</div>;
  }

  const customComponents: any = [
    {
      component: BlogCard,
      name: "BlogCard",
      inputs: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "html",
        },
        {
          name: "blog_featured_image",
          type: "file",
        },
        {
          name: "blog_featured_image_alt",
          type: "text",
        },
        {
          name: "blog_categories",
          type: "list",
          // defaultValue: [{ category: "hello" }],
          subFields: [
            {
              name: "category",
              type: "string",
              defaultValue: "Home",
            },
          ],
        },
        {
          name: "blog_tags",
          type: "Tags",
        },
        {
          name: "blog_slug",
          type: "text",
        },
        {
          name: "blog_meta_title",
          type: "text",
        },
        {
          name: "blog_meta_description",
          type: "text",
        },
        {
          name: "blog_author_name",
          type: "text",
        },
        {
          name: "blog_author_bio",
          type: "text",
        },
        {
          name: "blog_author_gravatar",
          type: "file",
        },
        {
          name: "blog_posted_date",
          type: "timestamp",
        },
        {
          name: "custom_schema",
          type: "json",
        },
        // {
        //   name: "faqs",
        //   type: "object",
        //   subFields: [
        //     {
        //       name: "question",
        //       type: "text",
        //     },
        //   ],
        // },
        {
          name: "faqs",
          type: "list",
          subFields: [
            {
              name: "title",
              type: "string",
              defaultValue: "Home",
            },
            {
              name: "description",
              type: "string",
              defaultValue: "Home",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blogs" />
        <meta property="og:description" content="All Blogs" />
        <meta
          property="og:url"
          content="https://takingmyclassesonline.com/blogs"
        />
        <meta property="og:site_name" content="Takingmyclassesonline" />
        <meta
          property="og:image"
          content="https://takingmyclassesonline.com/assets/weblogo.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://takingmyclassesonline.com/assets/popupModal.webp"
        />
        <meta property="og:image:width" content="1050" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Blogs" />
        <meta property="og:image:type" content="image/webp" />
        <meta
          property="article:published_time"
          content="2024-11-23T02:45:46-04:00"
        />
        <meta
          property="article:modified_time"
          content="2024-11-23T06:15:41-04:00"
        />
        <meta
          property="article:author"
          content="https://www.facebook.com/takingmyclassesonline/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs" />
        <meta name="twitter:description" content="All Blogs" />
        <meta name="twitter:creator" content="@takemyclas19231" />
        <meta
          name="twitter:image"
          content="https://takingmyclassesonline.com/assets/weblogo.png"
        />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="51 minutes" />
      </Head>
      <Blogs content={content} customComponents={customComponents} />
    </>
  );
};

export default Page;
