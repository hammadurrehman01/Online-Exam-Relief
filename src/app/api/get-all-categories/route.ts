import { NextResponse } from "next/server";
import { builder } from "@builder.io/sdk";

export async function GET() {
  try {
    const existingCategories = await builder.getAll("category", {
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
      options: { noTargeting: true, limit: 100 },
      cachebust: true,
      // cacheSeconds: 12,
      // query: {
      //   published: "published",
      // },
    });

    if (!existingCategories) {
      return NextResponse.json({ error: `Category not found` }, { status: 404 });
    }

    return NextResponse.json({ data: existingCategories }, { status: 200 });
  } catch (error: any) {
    console.error("Error duplicating page:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
