import React from "react";
import EaBanner from "./EaBanner";
import OurProcess from "./OurProcess";
import EADivider from "./EADivider";
import EaBenfits from "./EaBenfits";
import EaNumbers from "./EaNumbers";
import EaTestimonials from "./EaTestimonials";
import EaFaq from "./EaFaq";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

const Page = async () => {
  const content = await builder
    .get("category", {
      url: "/exam-assistance",
      userAttributes: {
        urlPath: "/exam-assistance",
      },
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    })
    .toPromise();

  if (!content) {
    console.error("Cateory data is null. Rendering fallback UI.");
    return <div>Failed to load data. Please try again later.</div>;
  }

  console.log("content ========>", content);

  return (
    // <div>
    //   <EaBanner />
    //   <OurProcess />
    //   <EADivider />
    //   <EaBenfits />
    //   <EaNumbers />
    //   <EaTestimonials />  
    //   <EaFaq />
    // </div>
    <RenderBuilderContent
          model="category"
          content={content}
          apiKey="15a1f6006b8b43d9a1f6953c09e3b979"
          options={{ includeRefs: true }}
          // customComponents={customComponents}
        />
  );
};

export default Page;
