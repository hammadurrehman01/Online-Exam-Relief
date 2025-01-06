import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "src/jsonData", "faq.json");

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { targetedQuestion } = body;

    const fileData = fs.readFileSync(filePath, "utf-8");
    const faqs = JSON.parse(fileData);

    const index = faqs.findIndex(
      (faq: any) =>
        faq.question.toLowerCase() === targetedQuestion.toLowerCase()
    );

    if (index === -1) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    faqs.splice(index, 1);

    fs.writeFileSync(filePath, JSON.stringify(faqs, null, 2), "utf-8");

    return NextResponse.json(
      { message: "FAQ deleted successfully", faqs },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the FAQ" },
      { status: 500 }
    );
  }
}
