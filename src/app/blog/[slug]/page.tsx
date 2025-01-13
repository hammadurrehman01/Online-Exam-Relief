export const dynamic = "force-dynamic";
import { RenderBuilderContent } from "@/components/builder";
import { getBlogs, getSingleBlog } from "@/lib/services";
import BlogDetails from "../BlogDetails";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const contentArray = await getSingleBlog();
  const content: any = contentArray.find(
    (blog: any) => blog?.data.url === `/blog/${params.slug}`
  );

  return {
    title:
      content?.data?.blocks[0]?.component?.options.blog_meta_title || "Blog",
    description:
      content?.data?.blocks[0]?.component?.options.blog_meta_description ||
      "Read this amazing blog!",
    alternates: {
      canonical: `https://techdept.mmecloud.tech${content?.data?.url}`,
    },
    openGraph: {
      title: content?.data?.blocks[0]?.component?.options.blog_meta_title,
      description:
        content?.data?.blocks[0]?.component?.options.blog_meta_description,
      images: content?.data?.blocks[0]?.component?.options.blog_featured_image,
      url: `https://techdept.mmecloud.tech${content?.data?.url}`,
    },
  };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const customComponents: any = [
    {
      component: BlogDetails,
      name: "BlogDetails",
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
          subFields: [
            {
              name: "category",
              type: "string",
            },
          ],
        },
        {
          name: "blog_tags",
          type: "Tags",
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

        {
          name: "faqs",
          type: "list",
          subFields: [
            {
              name: "question",
              type: "string",
            },
            {
              name: "answer",
              type: "html",
            },
          ],
        },
      ],
    },
  ];

  const contentArray = await getBlogs();
  const content = contentArray.find(
    (blog: any) => blog?.data.url === `/blog/${params.slug}`
  );

  return (
    <>
      <RenderBuilderContent
        model="blogs"
        content={content}
        inlineContent={true}
        apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
        options={{ includeRefs: true }}
        customComponents={customComponents}
      />
    </>
  );
};

export default Page;
