import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/jsonData", "faq.json");

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { updateQuestion, updateAnswer, question, answer } = body;

    const fileData = fs.readFileSync(filePath, "utf-8");
    const faqs = JSON.parse(fileData);
    console.log("updateQuestion =>>", updateQuestion)
    console.log("question =>>", question)
    const index = faqs.findIndex((faq: any) => faq.question === updateQuestion);

    if (index === -1) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    faqs[index] = {
      ...faqs[index],
      question: question ? question : updateQuestion,
      answer: answer ? answer : updateAnswer,
    };

    fs.writeFileSync(filePath, JSON.stringify(faqs, null, 2), "utf-8");

    return NextResponse.json(
      { message: "FAQ updated successfully", faqs },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating FAQ:", error);
    return NextResponse.json(
      { error: "Failed to update FAQ. Please try again later." },
      { status: 500 }
    );
  }
}
