import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/jsonData", "faq.json");

    const data = await fs.readFile(filePath, "utf8");

    const faqs = JSON.parse(data);

    return NextResponse.json(faqs);
  } catch (error) {
    console.error("Error reading FAQ data:", error);
    return NextResponse.json(
      { error: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}
