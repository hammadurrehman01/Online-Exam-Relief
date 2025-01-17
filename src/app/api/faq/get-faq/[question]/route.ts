import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/jsonData", "faq.json");

export async function GET(request: Request, { params }: any) {
  try {
    const { question } = params;

    if (!question) {
      return NextResponse.json(
        { error: "Missing required query parameter: question" },
        { status: 400 }
      );
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    const faqs = JSON.parse(fileData);

    const faq = faqs.find(
      (faq: any) =>
        faq.question.toLowerCase().replaceAll(" ", "-").replaceAll("?", "") ===
        question
    );

    if (!faq) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json({ faq }, { status: 200 });
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    return NextResponse.json(
      { error: "Failed to fetch FAQ. Please try again later." },
      { status: 500 }
    );
  }
}
