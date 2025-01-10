import BlogCard from "@/components/BlogsCard";
import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
import Banner from "../(Home)/Banner";
import Divider from "../(Home)/Divider";
import KnowUs from "../(Home)/KnowUs";
import OurServices from "../(Home)/OurServices";
import Solutions from "../(Home)/Solutions";
import Testimonials from "../(Home)/Testimonials";
import WorkProcess from "../(Home)/WorkProcess";
import EaBanner from "../exam-assistance/EaBanner";
import EADivider from "../exam-assistance/EADivider";
import EaFaq from "../exam-assistance/EaFaq";
import EaFocusCards from "../exam-assistance/EaFocusCards";
import EaLongContent from "../exam-assistance/EaLongContent";
import EaNumbers from "../exam-assistance/EaNumbers";
import EaTestimonials from "../exam-assistance/EaTestimonials";
import EaUrlPin from "../exam-assistance/EaUrlPin";
import OurProcess from "../exam-assistance/OurProcess";
import Faq from "../(Home)/Faq";
import BlogDetails from "../blog/BlogDetails";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const { params } = props;
  const slug = params.page.join("/");
  const pathname = `/${slug}`;

  const customComponentsHomepage = [
    {
      component: Banner,
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
          name: "SubHeading_two",
          type: "string",
        },
        {
          name: "Bullet1_icon",
          type: "file",
        },

        {
          name: "Bullet2_icon",
          type: "file",
        },

        {
          name: "Bullet3_icon",
          type: "file",
        },

        {
          name: "Ordernowbtn_icon",
          type: "file",
        },
        {
          name: "Ordernowbtn_title",
          type: "string",
        },
        {
          name: "Ordernowbtn_link",
          type: "string",
        },
        {
          name: "Chatonwhatsappbtn_icon",
          type: "file",
        },

        {
          name: "Chatonwhatsappbtn_title",
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
      ],
    },
    {
      component: Solutions,
      name: "Solutions",
      inputs: [
        {
          name: "MainHeading",
          type: "string",
        },

        {
          name: "Card_one_icon",
          type: "file",
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
          name: "Card_two_icon",
          type: "file",
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
          name: "Card_three_icon",
          type: "file",
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
          name: "Card_four_icon",
          type: "file",
        },
        {
          name: "Card_four_title",
          type: "string",
        },
        {
          name: "Card_four_description",
          type: "string",
        },

        {
          name: "Card_five_icon",
          type: "file",
        },
        {
          name: "Card_five_title",
          type: "string",
        },
        {
          name: "Card_five_description",
          type: "string",
        },

        {
          name: "Card_six_icon",
          type: "file",
        },
        {
          name: "Card_six_title",
          type: "string",
        },
        {
          name: "Card_six_description",
          type: "string",
        },
      ],
    },
    {
      component: KnowUs,
      name: "KnowUs",
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
          name: "Bullet_one_icon",
          type: "file",
        },
        {
          name: "Bullet_one_title",
          type: "string",
        },
        {
          name: "Bullet_one_description",
          type: "string",
        },

        {
          name: "Bullet_two_icon",
          type: "file",
        },
        {
          name: "Bullet_two_title",
          type: "string",
        },
        {
          name: "Bullet_two_description",
          type: "string",
        },
        {
          name: "button_title",
          type: "string",
        },
        {
          name: "button_link",
          type: "string",
        },
        {
          name: "image_one",
          type: "file",
        },
        {
          name: "image_two",
          type: "file",
        },
        {
          name: "image_three",
          type: "file",
        },
      ],
    },
    {
      component: Divider,
      name: "Divider",
      inputs: [
        {
          name: "MainHeading_part_one",
          type: "string",
        },
        {
          name: "MainHeading_part_two",
          type: "string",
        },
        {
          name: "button_title",
          type: "string",
        },
        {
          name: "button_link",
          type: "string",
        },
      ],
    },
    {
      component: OurServices,
      name: "OurServices",
      inputs: [
        {
          name: "top_bar",
          type: "string",
        },
        {
          name: "Main_heading",
          type: "string",
        },
        {
          name: "Card_one_icon",
          type: "file",
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
          name: "Card_two_icon",
          type: "file",
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
          name: "Card_three_icon",
          type: "file",
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
          name: "Card_four_icon",
          type: "file",
        },
        {
          name: "Card_four_title",
          type: "string",
        },
        {
          name: "Card_four_description",
          type: "string",
        },
        {
          name: "button_title",
          type: "string",
        },
        {
          name: "button_link",
          type: "string",
        },
      ],
    },
    {
      component: WorkProcess,
      name: "WorkProcess",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },
        {
          name: "Card_one_icon",
          type: "file",
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
          name: "Card_two_icon",
          type: "file",
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
          name: "Card_three_icon",
          type: "file",
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
          name: "Card_four_icon",
          type: "file",
        },
        {
          name: "Common_icon",
          type: "file",
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
      component: Faq,
      name: "Faq",
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
      component: Testimonials,
      name: "Testimonials",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },

        {
          name: "Testimonial_one_title",
          type: "string",
        },
        {
          name: "Testimonial_one_name",
          type: "string",
        },
        {
          name: "Testimonial_two_title",
          type: "string",
        },
        {
          name: "Testimonial_two_name",
          type: "string",
        },
        {
          name: "Testimonial_three_title",
          type: "string",
        },
        {
          name: "Testimonial_three_name",
          type: "string",
        },
        {
          name: "Testimonial_four_title",
          type: "string",
        },
        {
          name: "Testimonial_four_name",
          type: "string",
        },
        {
          name: "Testimonial_five_title",
          type: "string",
        },
        {
          name: "Testimonial_five_name",
          type: "string",
        },
      ],
    },
  ];

  const customComponentscategory = [
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

  const customComponentssubcategory = [
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

  const customComponentsBlog: any = [
    {
      component: BlogDetails,
      name: "BlogDetails",
      inputs: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "html",
        },
        {
          name: "blog_featured_image",
          type: "file",
        },
        {
          name: "blog_featured_image_alt",
          type: "text",
        },
        {
          name: "blog_categories",
          type: "list",
          subFields: [
            {
              name: "category",
              type: "string",
            },
          ],
        },
        {
          name: "blog_tags",
          type: "Tags",
        },
        {
          name: "blog_meta_title",
          type: "text",
        },
        {
          name: "blog_meta_description",
          type: "text",
        },
        {
          name: "blog_author_name",
          type: "text",
        },
        {
          name: "blog_author_bio",
          type: "text",
        },
        {
          name: "blog_author_gravatar",
          type: "file",
        },
        {
          name: "blog_posted_date",
          type: "timestamp",
        },
        {
          name: "custom_schema",
          type: "json",
        },

        {
          name: "faqs",
          type: "list",
          subFields: [
            {
              name: "question",
              type: "string",
            },
            {
              name: "answer",
              type: "html",
            },
          ],
        },
      ],
    },
  ];

  const [
    homepageContent,
    categorypageContent,
    subcategorypageContent,
    blogpageContent,
  ] = await Promise.all([
    builder
      .get("homepage", {
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        url: pathname,
        cachebust: true,
        cacheSeconds: 1,
      })
      .toPromise(),
    builder
      .get("category", {
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        url: pathname,
        cachebust: true,
        cacheSeconds: 1,
      })
      .toPromise(),
    builder
      .get("subcategory", {
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        url: pathname,
        cachebust: true,
        cacheSeconds: 1,
      })
      .toPromise(),
    builder
      .get("blogs", {
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        url: pathname,
        cachebust: true,
        cacheSeconds: 1,
      })
      .toPromise(),
  ]);

  return (
    <>
      {homepageContent && (
        <RenderBuilderContent
          content={homepageContent}
          apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
          model="homepage"
          customComponents={customComponentsHomepage}
        />
      )}
      {categorypageContent && (
        <div>
          <RenderBuilderContent
            model="category"
            content={categorypageContent}
            apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY}
            options={{ includeRefs: true }}
            customComponents={customComponentscategory}
          />
        </div>
      )}
      {subcategorypageContent && (
        <div>
          <RenderBuilderContent
            model="subcategory"
            content={subcategorypageContent}
            apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY}
            options={{ includeRefs: true }}
            customComponents={customComponentssubcategory}
          />
        </div>
      )}
      {blogpageContent && (
        <div>
          <RenderBuilderContent
            model="blogs"
            content={blogpageContent}
            apiKey="15a1f6006b8b43d9a1f6953c09e3b979"
            options={{ includeRefs: true }}
            customComponents={customComponentsBlog}
          />
        </div>
      )}
    </>
  );
}
