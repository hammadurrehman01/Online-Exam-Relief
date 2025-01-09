import { builder } from "@builder.io/sdk";

export async function getBlogs() {
  const response = await builder.getAll("blogs", {
    apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    options: { noTargeting: true, limit: 100 },
    cachebust: true,
    // cacheSeconds: 12,
    // query: {
    //   published: "published",
    // },
  });
  return response;
}

export async function getSingleBlog() {
  const blogs = await builder.getAll("blogs", {
    apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    options: { noTargeting: true, limit: 100 },
    cachebust: true,
    // cacheSeconds: 12,
    // query: {
    //   published: "published",
    // },
  });
  return blogs;
}

export async function getHomeData() {
  return await builder
    .get("homepage", {
      userAttributes: { urlPath: "/" },
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    })
    .toPromise();
}
