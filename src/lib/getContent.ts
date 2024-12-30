import { builder } from "@builder.io/sdk";

export async function getContent() {
  return await builder
    .get("homepage", {
      userAttributes: { urlPath: "/" },
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    })
    .toPromise();
}
