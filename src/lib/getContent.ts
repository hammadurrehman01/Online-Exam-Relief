import { builder } from "@builder.io/sdk";

export async function getContent() {
  return await builder
    .get("homepage", {
      userAttributes: { urlPath: "/" },
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    })
    .toPromise();
}

export async function getBlogs() {
  const response = await builder
    .get("blogs", {
      userAttributes: {
        urlPath: "/",
      },
      url: "/blogs",
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    })
    .toPromise();

  const blogs = response.data.blocks[0].component.options.columns.flatMap(
    (column: any) => {
      return column.blocks.map((block: any) => block.component.options);
    }
  );

  return blogs;
}
