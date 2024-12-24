import { builder } from "@builder.io/sdk";
import "aos/dist/aos.css";
import { HomeComps } from "./HomeComps";
import Banner from "./Banner";
import Solutions from "./Solutions";
import KnowUs from "./KnowUs";
import Divider from "./Divider";
import OurServices from "./OurServices";
import WorkProcess from "./WorkProcess";
import Faq from "./Faq";
import Testimonials from "./Testimonials";

// export const generateMetadata = async (): Promise<Metadata> => {
//   const content = await builder
//     .get("homepage", {
//       userAttributes: {
//         urlPath: "/",
//       },
//       apiKey: "3021e7c2623e453297ba70ab561879f3",
//     })
//     .toPromise();

//   return {
//     title: content?.data?.metatitle || "Default Title",
//     description: content?.data?.metadescription || "Default Description",
//     alternates: {
//       canonical: content?.data?.canonical || "Default Canonical",
//     },
//     robots: {
//       index: content?.data?.robots?.index,
//       follow: content?.data?.robots?.follow,
//       nocache: content?.data?.robots?.nocache,
//       googleBot: {
//         index: content?.data?.robots?.googleBot.index,
//         follow: content?.data?.robots?.googleBot.follow,
//         noimageindex: content?.data?.robots?.googleBot.noimageindex,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//   };
// };

const Page = async () => {
  const content = await builder
    .get("homepage", {
      userAttributes: {
        urlPath: "/",
      },
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
    })
    .toPromise();

  if (!content) {
    console.error("Home data is null. Rendering fallback UI.");
    return <div>Failed to load data. Please try again later.</div>;
  }

  const customComponents = [
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

  return (
    <div>
      {/* JSON-LD Schema Markup */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.data.organizationschema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.data.websiteschema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.data.productschema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(content.data.productschema),
        }}
      /> */}

      <HomeComps
        response={content}
        customComponents={customComponents}
        // darklogo={content?.data?.darklogo}
        // lightlogo={content?.data?.lightlogo}
      />
    </div>
  );
};

export default Page;
