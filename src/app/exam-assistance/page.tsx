import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
import Faq from "../(Home)/Faq";
import Testimonials from "../(Home)/Testimonials";
import WorkProcess from "../(Home)/WorkProcess";
import EADivider from "./EADivider";
import EaBanner from "./EaBanner";
import EaFocusCards from "./EaFocusCards";
import EaUrlPin from "./EaUrlPin";
import OurProcess from "./OurProcess";
import EaLongContent from "./EaLongContent";
import EaNumbers from "./EaNumbers";
import EaTestimonials from "./EaTestimonials";
import EaFaq from "./EaFaq";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const Page = async () => {
  const content = await builder
    .get("category", {
      url: "/exam-assistance",
      userAttributes: {
        urlPath: "/exam-assistance",
      },
      cache: false,
      cacheSeconds: 1,
      cachebust: true,
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    })
    .toPromise();

  if (!content) {
    console.error("Cateory data is null. Rendering fallback UI.");
    return <div>Failed to load data. Please try again later.</div>;
  }

  const customComponents = [
    {
      component: EaBanner,
      name: "EaBanner",
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
          name: "Paragraph",
          type: "string",
        },
        {
          name: "Icon_one",
          type: "file",
        },
        {
          name: "Icon_two",
          type: "file",
        },
        {
          name: "Icon_three",
          type: "file",
        },
        {
          name: "Whatsapp_icon",
          type: "file",
        },
        {
          name: "Whatsapp_title",
          type: "string",
        },
        {
          name: "Whatsapp_link",
          type: "string",
        },
        {
          name: "Ordernow_icon",
          type: "file",
        },
        {
          name: "Ordernow_title",
          type: "string",
        },
        {
          name: "Ordernow_link",
          type: "string",
        },
        {
          name: "Form_topbar",
          type: "string",
        },
        {
          name: "Form_heading_word_one",
          type: "string",
        },
        {
          name: "Form_heading_word_two",
          type: "string",
        },
        {
          name: "Form_heading_word_three",
          type: "string",
        },
        {
          name: "Form_heading_word_four",
          type: "string",
        },
        {
          name: "Form_heading_word_five",
          type: "string",
        },
        {
          name: "Form_heading_word_six",
          type: "string",
        },
        {
          name: "Form_button",
          type: "string",
        },
      ],
    },
    {
      component: EaUrlPin,
      name: "EaUrlPin",
      inputs: [
        {
          name: "MainHeading",
          type: "string",
        },

        {
          name: "Card_one_title",
          type: "string",
        },
        {
          name: "Card_one_description",
          type: "string",
        },
        {
          name: "Card_one_hover_title",
          type: "string",
        },
        {
          name: "Card_one_href",
          type: "string",
        },

        {
          name: "Card_two_title",
          type: "string",
        },
        {
          name: "Card_two_description",
          type: "string",
        },
        {
          name: "Card_two_hover_title",
          type: "string",
        },
        {
          name: "Card_two_href",
          type: "string",
        },

        {
          name: "Card_three_title",
          type: "string",
        },
        {
          name: "Card_three_description",
          type: "string",
        },
        {
          name: "Card_three_hover_title",
          type: "string",
        },
        {
          name: "Card_three_href",
          type: "string",
        },
      ],
    },
    {
      component: OurProcess,
      name: "OurProcess",
      inputs: [
        {
          name: "MainHeading",
          type: "string",
        },

        {
          name: "Card_one_number",
          type: "string",
        },
        {
          name: "Card_one_title",
          type: "string",
        },
        {
          name: "Card_one_description",
          type: "string",
        },
        {
          name: "Card_two_number",
          type: "string",
        },
        {
          name: "Card_two_title",
          type: "string",
        },
        {
          name: "Card_two_description",
          type: "string",
        },
        {
          name: "Card_three_number",
          type: "string",
        },
        {
          name: "Card_three_title",
          type: "string",
        },
        {
          name: "Card_three_description",
          type: "string",
        },
        {
          name: "Card_four_number",
          type: "string",
        },
        {
          name: "Card_four_title",
          type: "string",
        },
        {
          name: "Card_four_description",
          type: "string",
        },
      ],
    },
    {
      component: EADivider,
      name: "EADivider",
      inputs: [
        {
          name: "MainHeading",
          type: "string",
        },

        {
          name: "Whatsapp_button_icon",
          type: "file",
        },
        {
          name: "Whatsapp_button_title",
          type: "string",
        },
        {
          name: "Whatsapp_button_link",
          type: "string",
        },
        {
          name: "Ordernow_button_icon",
          type: "file",
        },
        {
          name: "Ordernow_button_title",
          type: "string",
        },
        {
          name: "Ordernow_button_link",
          type: "string",
        },
      ],
    },
    {
      component: EaFocusCards,
      name: "EaFocusCards",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },

        {
          name: "Card_one_title",
          type: "string",
        },

        {
          name: "Card_one_image",
          type: "file",
        },
        {
          name: "Card_two_title",
          type: "string",
        },

        {
          name: "Card_two_image",
          type: "file",
        },
        {
          name: "Card_three_title",
          type: "string",
        },

        {
          name: "Card_three_image",
          type: "file",
        },
        {
          name: "Card_four_title",
          type: "string",
        },

        {
          name: "Card_four_image",
          type: "file",
        },
        {
          name: "Card_five_title",
          type: "string",
        },

        {
          name: "Card_five_image",
          type: "file",
        },
        {
          name: "Card_six_title",
          type: "string",
        },

        {
          name: "Card_six_image",
          type: "file",
        },
      ],
    },
    {
      component: EaLongContent,
      name: "EaLongContent",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },

        {
          name: "Main_paragraph",
          type: "string",
        },
        {
          name: "Content_one_heading",
          type: "string",
        },
        {
          name: "Content_one_paragraph",
          type: "string",
        },

        {
          name: "Content_two_heading",
          type: "string",
        },
        {
          name: "Content_two_bullet_one",
          type: "string",
        },
        {
          name: "Content_two_bullet_two",
          type: "string",
        },
        {
          name: "Content_two_bullet_three",
          type: "string",
        },
        {
          name: "Content_two_bullet_four",
          type: "string",
        },
        {
          name: "Content_two_bullet_five",
          type: "string",
        },

        {
          name: "Content_three_heading",
          type: "string",
        },
        {
          name: "Content_three_bullet_one",
          type: "string",
        },
        {
          name: "Content_three_bullet_two",
          type: "string",
        },
        {
          name: "Content_three_bullet_three",
          type: "string",
        },
        {
          name: "Content_three_bullet_four",
          type: "string",
        },
        {
          name: "Content_three_bullet_five",
          type: "string",
        },

        {
          name: "Content_four_heading",
          type: "string",
        },
        {
          name: "Content_four_bullet_one",
          type: "string",
        },
        {
          name: "Content_four_bullet_two",
          type: "string",
        },
        {
          name: "Content_four_bullet_three",
          type: "string",
        },
        {
          name: "Content_four_bullet_four",
          type: "string",
        },
        {
          name: "Content_four_bullet_five",
          type: "string",
        },

        {
          name: "Content_five_heading",
          type: "string",
        },
        {
          name: "Content_five_bullet_one",
          type: "string",
        },
        {
          name: "Content_five_bullet_two",
          type: "string",
        },
        {
          name: "Content_five_bullet_three",
          type: "string",
        },
        {
          name: "Content_five_bullet_four",
          type: "string",
        },
        {
          name: "Content_five_bullet_five",
          type: "string",
        },

        {
          name: "Content_six_heading",
          type: "string",
        },
        {
          name: "Content_six_paragraph",
          type: "string",
        },

        {
          name: "Content_seven_heading",
          type: "string",
        },
        {
          name: "Content_seven_paragraph",
          type: "string",
        },
        {
          name: "Bottom_paragraph",
          type: "string",
        },
      ],
    },
    {
      component: EaNumbers,
      name: "EaNumbers",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },
        {
          name: "Main_image",
          type: "file",
        },
        {
          name: "faq_one_title",
          type: "string",
        },
        {
          name: "faq_one_description",
          type: "string",
        },

        {
          name: "faq_two_title",
          type: "string",
        },
        {
          name: "faq_two_description",
          type: "string",
        },

        {
          name: "faq_three_title",
          type: "string",
        },
        {
          name: "faq_three_description",
          type: "string",
        },

        {
          name: "faq_four_title",
          type: "string",
        },
        {
          name: "faq_four_description",
          type: "string",
        },
      ],
    },
    {
      component: EaTestimonials,
      name: "EaTestimonials",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },

        {
          name: "Person_one_image",
          type: "file",
        },
        {
          name: "Person_one_name",
          type: "string",
        },
        {
          name: "Person_one_bio",
          type: "string",
        },
        {
          name: "Title_one",
          type: "string",
        },

        {
          name: "Person_two_image",
          type: "file",
        },
        {
          name: "Person_two_name",
          type: "string",
        },
        {
          name: "Person_two_bio",
          type: "string",
        },
        {
          name: "Title_two",
          type: "string",
        },

        {
          name: "Person_three_image",
          type: "file",
        },
        {
          name: "Person_three_name",
          type: "string",
        },
        {
          name: "Person_three_bio",
          type: "string",
        },
        {
          name: "Title_three",
          type: "string",
        },

        {
          name: "Person_four_image",
          type: "file",
        },
        {
          name: "Person_four_name",
          type: "string",
        },
        {
          name: "Person_four_bio",
          type: "string",
        },
        {
          name: "Title_four",
          type: "string",
        },

        {
          name: "Person_five_image",
          type: "file",
        },
        {
          name: "Person_five_name",
          type: "string",
        },
        {
          name: "Person_five_bio",
          type: "string",
        },
        {
          name: "Title_five",
          type: "string",
        },
      ],
    },
    {
      component: EaFaq,
      name: "EaFaq",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },

        {
          name: "faq_one_title",
          type: "string",
        },
        {
          name: "faq_one_description",
          type: "string",
        },

        {
          name: "faq_two_title",
          type: "string",
        },
        {
          name: "faq_two_description",
          type: "string",
        },

        {
          name: "faq_three_title",
          type: "string",
        },
        {
          name: "faq_three_description",
          type: "string",
        },

        {
          name: "faq_four_title",
          type: "string",
        },
        {
          name: "faq_four_description",
          type: "string",
        },
        {
          name: "faq_five_title",
          type: "string",
        },
        {
          name: "faq_five_description",
          type: "string",
        },
        {
          name: "faq_six_title",
          type: "string",
        },
        {
          name: "faq_six_description",
          type: "string",
        },
        {
          name: "faq_seven_title",
          type: "string",
        },
        {
          name: "faq_seven_description",
          type: "string",
        },
        {
          name: "faq_eight_title",
          type: "string",
        },
        {
          name: "faq_eight_description",
          type: "string",
        },
      ],
    },
  ];

  return (
    // <div>
    // <EaBanner/>
    // <EaUrlPin/>
    // <OurProcess/>
    // <EADivider/>
    // <EaFocusCards/>
    // <EaLongContent/>
    // <EaNumbers/>
    // <EaTestimonials/>
    // <EaFaq/>
    // </div>
    <div>
      <RenderBuilderContent
        model="category"
        content={content}
        apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY}
        options={{ includeRefs: true }}
        customComponents={customComponents}
      />
    </div>
  );
};

export default Page;
