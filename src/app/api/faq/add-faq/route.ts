import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/jsonData", "faq.json");

export async function POST(request: Request) {
    console.log("faqs =sdadsadasd=> ");

  try {
    const body = await request.json();
    console.log("body ==> ", body);
    
    const { question, answer } = body;

    if (!question || !answer) {
      return NextResponse.json(
        { error: "Missing required fields: question, or answer" },
        { status: 400 }
      );
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    const faqs = JSON.parse(fileData);

    const newFaq = { question, answer };
    faqs.push(newFaq);

    fs.writeFileSync(filePath, JSON.stringify(faqs, null, 2), "utf-8");

    return NextResponse.json(
      { message: "FAQ added successfully", faqs },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding FAQ:", error);
    return NextResponse.json(
      { error: "Failed to add FAQ. Please try again later." },
      { status: 500 }
    );
  }
}
