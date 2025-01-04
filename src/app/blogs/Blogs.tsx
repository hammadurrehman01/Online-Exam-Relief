// import BlogCard from "@/components/BlogsCard";
// import AllBlogSkeleton from "@/components/common/AllBlogsSkeleton";
// import BlogsBanner from "./BlogsBanner";
// import { getAllBlogs } from "../services";

"use client";

import { RenderBuilderContent } from "@/components/builder";
import BlogsBanner from "./BlogsBanner";
import BlogCard from "@/components/BlogsCard";

const Blogs = ({
  content,
  customComponents,
  id,
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
  return (
    <div>
      <BlogsBanner />
      {!content ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-14 py-6 mt-4 gap-4">
          {content?.map((blog: any) => (
            <div key={blog.blog_id}>
              <BlogCard
                id={blog.title}
                title={blog.title}
                description={blog.description}
                blog_featured_image={blog.blog_featured_image}
                blog_featured_image_alt={blog.blog_featured_image_alt}
                blog_categories={blog.blog_categories}
                blog_tags={blog.blog_tags}
                blog_slug={blog.blog_slug}
                blog_meta_title={blog.blog_meta_title}
                blog_meta_description={blog.blog_meta_description}
                blog_author_name={blog.blog_author_name}
                blog_author_bio={blog.blog_author_bio}
                blog_author_gravatar={blog.blog_author_gravatar}
                blog_posted_date={blog.blog_posted_date}
                custom_schema={blog.custom_schema}
                faq={blog.faqs}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;

{
  /* <RenderBuilderContent
            model="blogs"
            content={content}
            apiKey="15a1f6006b8b43d9a1f6953c09e3b979"
            options={{ includeRefs: true }}
            customComponents={customComponents}
          /> */
}
