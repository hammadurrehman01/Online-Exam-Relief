import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import Banner from "../(Home)/Banner";
import Solutions from "../(Home)/Solutions";
import KnowUs from "../(Home)/KnowUs";
import Divider from "../(Home)/Divider";
import OurServices from "../(Home)/OurServices";
import WorkProcess from "../(Home)/WorkProcess";
import Faq from "../(Home)/Faq";
import Testimonials from "../(Home)/Testimonials";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

// const API_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://techdept.mmecloud.tech/"
//     : // ? "http://localhost:3000/"
//       "http://localhost:3000/";

// export const fetchHomeData = async () => {
//   try {
//     const response = await fetch(
//       `http://localhost:3000/api/get-homedata`
//     );

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || "Failed to fetch home data");
//     }
//     const jsonResponse = await response.json();
//     return jsonResponse.data;
//   } catch (error: any) {
//     console.error("Error fetching home data:", error.message);
//     return null;
//   }
// };

export default async function Page(props: PageProps) {
  const { params } = props;
  const slug = params.page.join("/");
  const pathname = `/${slug}`;

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

  console.log("pathname", pathname);
  

  const content = await builder
    .get("homepage", {
      apiKey: "15a1f6006b8b43d9a1f6953c09e3b979",
      url: pathname,
    })
    .toPromise();

  return (
    <RenderBuilderContent
      content={content}
      apiKey="3021e7c2623e453297ba70ab561879f3"
      model={"homepage"}
      customComponents={customComponents}
    />
  );
}
 