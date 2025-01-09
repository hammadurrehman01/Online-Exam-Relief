import { builder } from "@builder.io/sdk";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await builder.getAll("blogs", {
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
      options: { noTargeting: true, limit: 100 },
      cachebust: true,
      // cacheSeconds: 12,
      // query: {
      //   published: "published",
      // },
    });
    if (response) {
      return NextResponse.json(response);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}
