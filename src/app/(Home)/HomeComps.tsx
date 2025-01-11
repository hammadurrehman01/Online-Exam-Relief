"use client";

import { RenderBuilderContent } from "@/components/builder";
import "aos/dist/aos.css";
import { memo, useEffect } from "react";

export const HomeComps = memo(function HomeComps({
  faqs,
  response,
  customComponents,
}: //   darklogo,
//   lightlogo,
any) {
  //   useEffect(() => {
  //     if (darklogo) localStorage.setItem("darkLogo", darklogo);
  //     if (lightlogo) localStorage.setItem("lightLogo", lightlogo);
  //   }, [darklogo, lightlogo]); // Add dependencies here

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parsedUser = user ? JSON.parse(user) : null;
    if (!parsedUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: "admin@gmail.com",
          password: "123",
          isLoggedIn: false,
        })
      );
    }
  }, []);

  return (
    <RenderBuilderContent
      model="homepage"
      content={response}
      apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
      options={{ includeRefs: true }}
      customComponents={customComponents}
    />
  );
});
