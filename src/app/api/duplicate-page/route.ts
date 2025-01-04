import { NextResponse } from "next/server";
import { builder } from "@builder.io/sdk";

export async function POST(req: any) {
  try {
    const { category, newSlug, selectedCategory } = await req.json();

    const existingSlug = "/";

    // Fetch the existing page content by its slug
    const existingPage = await builder
      .get(`${selectedCategory ? "subcategory" : "category"}`, {
        url: `${
          selectedCategory
            ? "/exam-assistance/timed-test-support"
            : "/exam-assistance"
        }`,
        apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
      })
      .promise();

    if (!existingPage) {
      return NextResponse.json(
        { error: `Page with slug '${existingSlug}' not found.` },
        { status: 404 }
      );
    }

    const existingPages = await builder.getAll(
      `${selectedCategory ? "subcategory" : "category"}`,
      {
        url: newSlug,
        apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
      }
    );

    if (existingPages.length !== 0) {
      return NextResponse.json(
        { message: `Page ${newSlug} with this url already exists'.` },
        { status: 400 }
      );
    }

    // Use Builder.io REST API to create the new page
    const response = await fetch(
      `${
        selectedCategory
          ? "https://builder.io/api/v1/write/subcategory"
          : "https://builder.io/api/v1/write/category"
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer bpk-902f967183a149c1924441535ca074ac`,
        },
        body: JSON.stringify({
          name: category,
          published: "published",
          query: [
            {
              "@type": "@builder.io/core:Query",
              property: "urlPath",
              operator: "is",
              value: newSlug,
            },
          ],
          data: {
            blocks: existingPage.data.blocks,
          },
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        { message: `Page duplicated successfully to '${newSlug}'.` },
        { status: 201 }
      );
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to create page." },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error duplicating page:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
