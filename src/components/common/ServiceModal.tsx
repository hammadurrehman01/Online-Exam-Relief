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
import { toast } from "react-toastify";
import { fetchAllCategories, fetchAllPages } from "@/lib/services";

interface Props {
  serviceModal: any;
  setServiceModal: (value: boolean) => void;
  services: any;
  setServices: (value: any) => void;
}

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

      setServices(updatedServices);
      localStorage.setItem("services", JSON.stringify(updatedServices));
      toast.success("Page is added to the service!");
      setServiceModal(false);
    }
  };

  const getAllPages = async () => {
    const data: any = await fetchAllPages();

    setExistingPages(data.data);
  };

  const getAllCategories = async () => {
    const data: any = await fetchAllCategories();

    const servicesObj = data.data.map((item: any) => {
      return {
        category: item.name,
        href: item.data.url,
      };
    });

    setServices(servicesObj);
  };

  const AddSubCategory = async () => {
    try {
      // Validate required fields
      if (!subCategory || !slug || !selectedCategory) {
        toast.error("Please provide all required fields.");
        return;
      }

      // API call
      // const response = await fetch("/api/duplicate-page", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     category: subCategory,
      //     newSlug: "/exam-assistance/timed-test-support",
      //     selectedCategory,
      //   }),
      // });

      // const data = await response.json();

      // if (response.ok) {

      const updatedServices = services.map((service: any) => {
        if (service.href === selectedCategory.href) {
          return {
            ...service,
            subcategories: [
              ...(service.subcategories || []),
              {
                name: subCategory,
                href: `${service.href}/${slug.replaceAll(" ", "-")}`,
              },
            ],
          };
        }
        return service;
      });
      setServices(updatedServices);

      toast.success("Subcategory added successfully!");
      setServiceModal(false);

      // } else {
      //   // Handle API errors
      //   toast.error(data.message || "Failed to add subcategory.");
      // }
    } catch (error) {
      // General error handling
      console.error("Error adding subcategory:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getAllPages();
  }, []);

  return (
    <Dialog open={serviceModal}>
      <DialogContent className="sm:max-w-[475px] mt-8 z-[9999999]">
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
                className="col-span-3 border-[0.5px] border-gray-700"
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
                className="col-span-3 border-[0.5px] border-gray-700"
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
                  category: selectedPage?.name,
                  href: selectedPage?.query[0]?.value,
                });
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select from existing pages" />
              </SelectTrigger>

              <SelectContent className="h-[200px] z-[999999999]">
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
                  console.log("selectedCategory =>", selectedCategory);
                  setSelectedCategory({
                    category: selectedCategory?.category,
                    href: selectedCategory.href,
                  });
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select from existing categories" />
                </SelectTrigger>

                <SelectContent className="h-[200px] z-[999999999]">
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
