"use client";
import { builder, Builder } from "@builder.io/react";
import Banner from "./app/(Home)/Banner";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Banner, {
  name: "Banner",
  inputs: [
    {
      name: "MainHeading",
      type: "string",
    },
    {
      name: "SubHeading",
      type: "string",
    },
    {
      name: "Bullet1_icon",
      type: "file",
    },
    {
      name: "Bullet1_title",
      type: "string",
    },
    {
      name: "Bullet2_icon",
      type: "file",
    },
    {
      name: "Bullet2_title",
      type: "string",
    },
    {
      name: "Bullet3_icon",
      type: "file",
    },
    {
      name: "Bullet3_title",
      type: "string",
    },

    {
      name: "Ordernowbtn_icon",
      type: "file",
    },
    {
      name: "Chatonwhatsappbtn_icon",
      type: "file",
    },
    {
      name: "Ordernowbtn_title",
      type: "string",
    },
    {
      name: "Chatonwhatsappbtn_title",
      type: "string",
    },
    {
      name: "Ordernowbtn_link",
      type: "string",
    },
    {
      name: "Chatonwhatsappbtn_link",
      type: "string",
    },
    {
      name: "Formtopbar",
      type: "string",
    },
    {
      name: "Formheading",
      type: "string",
    },
    {
      name: "Inputone",
      type: "string",
    },
    {
      name: "Inputtwo",
      type: "string",
    },
    {
      name: "Inputthree",
      type: "string",
    },
    {
      name: "Formbutton",
      type: "string",
    },
    {
      name: "Metatitle",
      type: "string",
    },
    {
      name: "Metadescription",
      type: "string",
    },
    {
      name: "Canonical",
      type: "string",
    },
  ],
});
