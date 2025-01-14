import Head from "next/head";
import { Metadata } from "next";
import Blogs from "./Blogs";
import { builder } from "@builder.io/sdk";

export const metadata: Metadata = {
  title: "Blogs",
  description: `All Blogs`,
  alternates: {
    canonical: "https://gogrades-testing.eduresearchers.com/blogs",
  },
};

async function fetchBlogsData() {
  try {
    const content = await builder.getAll("blogs", {
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
      options: { noTargeting: true, limit: 100 },
      cache: false,
      staleCacheSeconds: 0,
      query: {
        published: "published",
      },
    });

    if (!content) {
      console.error(`Content isn't retrieved`);
      return null;
    }

    return content;
  } catch (error: any) {
    console.error("Error fetching blogs data:", error.message);
    return null;
  }
}

const Page = async () => {
  const content = await fetchBlogsData();

  if (!content) {
    console.error(`Content isn't retrieved`);
    return null;
  }

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blogs" />
        <meta property="og:description" content="All Blogs" />
        <meta
          property="og:url"
          content="https://gogrades-testing.eduresearchers.com/blogs"
        />
        <meta property="og:site_name" content="OnlineExamRelief" />
        <meta
          property="og:image"
          content="https://gogrades-testing.eduresearchers.com/blogs/logo (1).png"
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
      <Blogs content={content} />
    </>
  );
};

export default Page;
