import Head from "next/head";
import { Metadata } from "next";
import Blogs from "./Blogs";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blogs",
  description: `All Blogs`,
  alternates: {
    canonical: "https://techdept.mmecloud.tech/blogs",
  },
};

const Page = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  let content = [];
  try {
    const response = await fetch(`${baseUrl}/api/get-all-blogs`, {
      cache: "reload",
    }); // `force-cache` for ISR
    if (!response.ok) throw new Error("Failed to fetch blogs");
    content = await response.json();
    console.log("response", content)
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  if (!content || content.length === 0) {
    console.error("Blog data is null or empty. Rendering fallback UI.");
    return <div>Failed to load data. Please try again later.</div>;
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
      <Blogs content={content} />
    </>
  );
};

export default Page;
