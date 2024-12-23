"use client";

import { ComponentProps } from "react";
import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent({
  content,
  model,
  customComponents,
}: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return (
      <BuilderComponent
        content={content}
        model={model}
        customComponents={customComponents}
      />
    );
  }

  return <div>No content available for the model {model}.</div>;
}
