import { NextResponse } from "next/server";
import { builder } from "@builder.io/sdk";

export async function GET() {
  try {
    const content = await builder.get("homepage", {
      userAttributes: {
        urlPath: "/",
      },
      url: "/",
      cache: false,
      cachebust: true,
      cacheSeconds: 0,
      staleCacheSeconds: 0,
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    });

    if (!content) {
      return NextResponse.json({ error: `content not found` }, { status: 404 });
    }

    return NextResponse.json({ data: content }, { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
