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
          {content?.map((item: any) => (
            <div key={item?.data?.blocks[0]?.component?.options.title}>
              <BlogCard
                title={item?.data?.blocks[0]?.component?.options.title}
                description={item?.data?.blocks[0]?.component?.options.description}
                blog_featured_image={item?.data?.blocks[0]?.component?.options.blog_featured_image}
                blog_featured_image_alt={item?.data?.blocks[0]?.component?.options.blog_featured_image_alt}
                blog_slug={item?.data?.url}
              />
              {/* <RenderBuilderContent
                model="blogs"
                content={content}
                apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
                options={{ includeRefs: true }}
                customComponents={customComponents}
              /> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
