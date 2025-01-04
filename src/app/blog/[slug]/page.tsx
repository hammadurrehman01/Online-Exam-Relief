import { getBlogs } from "@/lib/getContent";
import BlogDetails from "../BlogDetails";
import { Metadata } from "next";

// export const generateMetadata = async ({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> => {
//   const response = await fetch(
//     `https://blogs.takingmyclassesonline.com/wp-json/custom-blog-api/v1/blog/${params.slug}`,
//     {
//       headers: {
//         Authorization: `Bearer 347f7627d6c4765cf911391a34a3319e2140859fbc723ebefeb4f2f39d8a1d67`,
//       },
//     }
//   );
//   const blog = await response.json();

//   return {
//     title: blog.blog_title || "Blog",
//     description: blog.blog_meta_description || "Read this amazing blog!",
//     alternates: {
//       canonical: `https://www.takingmyclassesonline.com/blog/${blog.blog_slug}`,
//     },
//     openGraph: {
//       title: blog.blog_meta_title,
//       description: blog.blog_meta_description,
//       images: [blog.blog_featured_image_url],
//       url: `https://www.takingmyclassesonline.com/blog/${blog.blog_slug}`,
//     },
//   };
// };

const Page = async ({ params }: { params: { slug: string } }) => {
  // const response = await fetch(
  //   `https://blogs.takingmyclassesonline.com/wp-json/custom-blog-api/v1/blog/${params.slug}`,
  //   {
  //     headers: {
  //       Authorization: `Bearer 347f7627d6c4765cf911391a34a3319e2140859fbc723ebefeb4f2f39d8a1d67`,
  //     },
  //   }
  // );
  // const blog = await response.json();

  // console.log("blog ===>", blog);

  const content = await getBlogs();

  return <BlogDetails blogs={content} />;
};

export default Page;
