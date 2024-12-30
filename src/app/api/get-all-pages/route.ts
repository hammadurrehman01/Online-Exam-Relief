import { NextResponse } from "next/server";
import { builder } from "@builder.io/sdk";

export async function GET() {
  try {
    const existingPages = await builder.getAll("homepage", {
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
      options: { noTargeting: true, limit: 100 },
      cachebust: true,
      // cacheSeconds: 12,
      // query: {
      //   published: "published",
      // },
    });

    if (!existingPages) {
      return NextResponse.json({ error: `Pages not found` }, { status: 404 });
    }

    console.log("`existingPages`:", existingPages);
    

    return NextResponse.json({ data: existingPages }, { status: 200 });
  } catch (error: any) {
    console.error("Error duplicating page:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
