import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LoaderCircle } from "lucide-react";
import { Separator } from "../ui/separator";
import { fetchAllPages } from "@/lib/utils";
import { toast } from "react-toastify";

interface Props {
  serviceModal: any;
  setServiceModal: (value: boolean) => void;
  services: any;
  setServices: (value: any) => void;
}

const defaultServices = [
  {
    category: "Exam Assistance Services",
    href: "/exam-assistance",
    subcategories: [
      {
        name: "Timed Test Support",
        href: "/exam-assistance/timed-test-support",
      },
      { name: "Live Exam Support", href: "/exam-assistance/online-exam-help" },
      {
        name: "Mock Exams & Practice Tests",
        href: "/exam-assistance/practice-test-preparation",
      },
    ],
  },
  {
    category: "Subject-Specific Services",
    href: "/subject-specific",
    subcategories: [
      { name: "Math Exam Help", href: "/subject-specific/math-exam-help" },
      {
        name: "Science Exam Help",
        href: "/subject-specific/science-exam-help",
      },
      {
        name: "Engineering Exam Help",
        href: "/subject-specific/engineering-exam-help",
      },
      { name: "Law Exam Help", href: "/subject-specific/law-exam-help" },
      {
        name: "Business & Finance Exam Help",
        href: "/subject-specific/business-finance-exam-help",
      },
      {
        name: "Humanities Exam Help",
        href: "/subject-specific/humanities-exam-help",
      },
    ],
  },
  {
    category: "Assignment Help Services",
    href: "/assignment-help",
    subcategories: [
      {
        name: "Essay & Paper Writing Help",
        href: "/assignment-help/essay-paper-writing",
      },
      { name: "Project Support", href: "/assignment-help/project-support" },
    ],
  },
  {
    category: "Test Preparation Packages",
    href: "/test-preparation",
    subcategories: [
      {
        name: "Personalized Study Plans",
        href: "/test-preparation/personalized-study-plans",
      },
      {
        name: "One-on-One Tutoring",
        href: "/test-preparation/one-on-one-tutoring",
      },
    ],
  },
  {
    category: "Emergency Exam Support",
    href: "/emergency-exam-support",
    subcategories: [
      {
        name: "Last-Minute Exam Help",
        href: "/emergency-exam-support/last-minute-help",
      },
      {
        name: "Overnight Preparation Assistance",
        href: "/emergency-exam-support/overnight-preparation",
      },
    ],
  },
];

export function ServiceModal({
  serviceModal,
  setServiceModal,
  services,
  setServices,
}: Props) {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isExistingPageChecked, setIsExistingPageChecked] = useState(false);
  const [isExistingCategoryChecked, setIsExistingCategoryChecked] =
    useState(false);
  const [service, setService] = useState<any>({});
  const [selectedCategory, setSelectedCategory] = useState<any>({});
  const [existingPages, setExistingPages] = useState([]);

  const handleAddPage = async () => {
    setLoading(true);
    const existingService = services.find(
      (item: any) => item.href === service.href
    );
    if (existingService) {
      toast.error("The service already exists");
    } else {
      try {
        if (category && slug) {
          const response = await fetch("/api/duplicate-page", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              category,
              newSlug: `/${slug.replaceAll(" ", "-")}`,
            }),
          });
          const data = await response.json();

          if (response.ok) {
            toast.success(`Page created at ${slug}`);
            if (isChecked) {
              const updatedServices = [
                ...services,
                { category, href: `/${slug.replaceAll(" ", "-")}` },
              ];
              setServices(updatedServices);
              localStorage.setItem("services", JSON.stringify(updatedServices));
            }
          } else {
            toast.error(data.message);
          }
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
        setServiceModal(false);
      }
    }
  };

  const AddPageToService = async () => {
    const existingService = services.find(
      (item: any) => item.href === service.href
    );
    if (existingService) {
      toast.error("The service already exists");
    } else {
      const updatedServices = [...services, service];
      console.log("service ====>", service);

      setServices(updatedServices);
      localStorage.setItem("services", JSON.stringify(updatedServices));
      toast.success("Page is added to the service!");
      setServiceModal(false);
    }
  };

  const getAllPages = async () => {
    const data: any = await fetchAllPages();

    setExistingPages(data.data);

    const updatedServices = defaultServices.concat(
      services.filter((s: any) =>
        data.data.some((page: any) => page.query[0]?.value === s.href)
      )
    );

    setServices(updatedServices);
    localStorage.setItem("services", JSON.stringify(updatedServices));
  };

  const AddSubCategory = async () => {
    const updatedServices = services.map((service: any) => {
      if (service.href === selectedCategory.href) {
        const updatedSubcategories = service.subcategories
          ? [
              ...service.subcategories,
              { name: subCategory, href: `${service.href}${slug}` },
            ]
          : [{ name: subCategory, href: slug }];
        return { ...service, subcategories: updatedSubcategories };
      }
      return service;
    });

    setServices(updatedServices);
    localStorage.setItem("services", JSON.stringify(updatedServices));
    toast.success("Subcategory added successfully!");
  };

  useEffect(() => {
    getAllPages();
  }, []);

  return (
    <Dialog open={serviceModal}>
      <DialogContent className="sm:max-w-[475px] mt-8">
        <DialogHeader>
          <DialogTitle>Add a new Page</DialogTitle>
        </DialogHeader>

        {!isExistingPageChecked && !isExistingCategoryChecked && (
          <div>
            <div className="flex justify-center items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Title
              </Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="col-span-3"
                placeholder="Take My Exam"
              />
            </div>
            <div className="flex justify-center items-center gap-4 pt-3">
              <Label htmlFor="href" className="text-right">
                Link
              </Label>
              <Input
                id="href"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="col-span-3"
                placeholder="/take-my-exam"
              />
            </div>{" "}
            <div className="flex items-center justify-start gap-4  py-3">
              <Checkbox
                id="isServiceCheckbox"
                onClick={() => setIsChecked(!isChecked)}
              />
              <Label htmlFor="isServiceCheckbox" className="text-right ">
                Do you want to add this page as a service?
              </Label>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Separator className="my-4 w-[40%]" />
              <div className="text-center">OR</div>

              <Separator className="my-4 w-[40%]" />
            </div>
          </div>
        )}

        {!isExistingCategoryChecked && (
          <div className="flex items-center justify-start gap-4  py-3">
            <Checkbox
              id="isExistingPageCheckbox"
              onClick={() => setIsExistingPageChecked(!isExistingPageChecked)}
            />
            <Label htmlFor="isExistingPageCheckbox" className="text-right ">
              Do you want to add any existing page as a service?
            </Label>
          </div>
        )}

        {isExistingPageChecked && (
          <div className="flex justify-center items-center gap-4">
            <Label htmlFor="href" className="text-right">
              All pages
            </Label>
            <Select
              onValueChange={(value) => {
                const selectedPage = JSON.parse(value);
                setService({
                  title: selectedPage?.name,
                  href: selectedPage?.query[0]?.value,
                });
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select from existing pages" />
              </SelectTrigger>

              <SelectContent className="h-[250px]">
                {existingPages.length === 0 ? (
                  <div className="w-full">
                    <LoaderCircle className="m-auto my-6  animate-spin" />
                  </div>
                ) : (
                  <SelectGroup>
                    {existingPages.map((page: any) => (
                      <SelectItem key={page.id} value={JSON.stringify(page)}>
                        {page.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )}
              </SelectContent>
            </Select>
          </div>
        )}

        {!isExistingCategoryChecked && !isExistingPageChecked && (
          <div className="flex justify-center items-center gap-4">
            <Separator className="my-4 w-[40%]" />
            <div className="text-center">OR</div>

            <Separator className="my-4 w-[40%]" />
          </div>
        )}

        {!isExistingPageChecked && (
          <div className="flex items-center justify-start gap-4  py-3">
            <Checkbox
              id="isExistingPageCategory"
              onClick={() =>
                setIsExistingCategoryChecked(!isExistingCategoryChecked)
              }
            />
            <Label htmlFor="isExistingPageCategory" className="text-right">
              Do you want to add a subcategory to an existing category?
            </Label>
          </div>
        )}

        {!isExistingPageChecked && isExistingCategoryChecked && (
          <>
            <div>
              <div className="flex justify-center items-center gap-4">
                <Label htmlFor="sub-category" className="text-right">
                  Title
                </Label>
                <Input
                  id="sub-category"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="col-span-3"
                  placeholder="Sub category title"
                />
              </div>
              <div className="flex justify-center items-center gap-4 pt-3">
                <Label htmlFor="href" className="text-right">
                  Link
                </Label>
                <Input
                  id="href"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="col-span-3"
                  placeholder="/sub-category-slug"
                />
              </div>{" "}
            </div>

            <div className="flex justify-center items-center gap-4">
              <Label htmlFor="href" className="text-right">
                All Categories
              </Label>
              <Select
                onValueChange={(value) => {
                  const selectedCategory = JSON.parse(value);
                  setSelectedCategory({
                    category: selectedCategory?.category,
                    href: selectedCategory.href,
                  });
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select from existing categories" />
                </SelectTrigger>

                <SelectContent className="h-[200px]">
                  {services.length === 0 ? (
                    <div className="w-full">
                      <LoaderCircle className="m-auto my-6  animate-spin" />
                    </div>
                  ) : (
                    <SelectGroup>
                      {services.map((service: any) => (
                        <SelectItem
                          key={service.href}
                          value={JSON.stringify(service)}
                        >
                          {service.category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  )}
                </SelectContent>
              </Select>
            </div>
          </>
        )}

        <DialogFooter>
          {!isExistingPageChecked && !isExistingCategoryChecked && (
            <Button onClick={handleAddPage}>
              {" "}
              {loading ? "Adding..." : "Add Page"}
            </Button>
          )}

          {Object.keys(service).length !== 0 && isExistingPageChecked && (
            <Button onClick={AddPageToService}>
              {" "}
              {loading ? "Adding..." : "Add this Page to services"}
            </Button>
          )}

          {Object.keys(selectedCategory).length !== 0 &&
            isExistingCategoryChecked && (
              <Button onClick={AddSubCategory}>
                {" "}
                {loading ? "Adding..." : "Add this subcategory"}
              </Button>
            )}
          <Button onClick={() => setServiceModal(false)}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
