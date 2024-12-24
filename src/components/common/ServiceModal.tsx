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
  { title: "Take My Exam", href: "/take-my-exam" },
  { title: "Take My GRE Exam", href: "/take-my-gre-exam" },
  { title: "Take GMAT Online Exam", href: "/take-gmat-online-exam" },
  { title: "Take LSAT Exam Online", href: "/lsat-exam-prep" },
  { title: "Toefl Exam Online", href: "/toefl-exam-online" },
  { title: "Take my Teas Exam For me", href: "/take-my-teas-exam-for-me" },
  { title: "Hesi Exam", href: "/hesi-exam" },
  { title: "Take My GED For Me", href: "/take-my-ged-for-me" },
  { title: "PTE Academic Online", href: "/pte-academic-online" },
  {
    title: "Pay Someone To Take My Class",
    href: "/pay-someone-to-take-my-class",
  },
];

export function ServiceModal({
  serviceModal,
  setServiceModal,
  services,
  setServices,
}: Props) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isExistingPageChecked, setIsExistingPageChecked] = useState(false);
  const [service, setService] = useState<any>({});
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
        if (title && slug) {
          const response = await fetch("/api/duplicate-page", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, newSlug: slug }),
          });
          const data = await response.json();

          if (response.ok) {
            toast.success(`Page created at ${slug}`);
            if (isChecked) {
              const updatedServices = [...services, { title, href: slug }];
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
    console.log("Sdasdsadas");

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
    // const response = await fetch("/api/get-all-pages");
    // const data = await response.json();

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

  useEffect(() => {
    getAllPages();
  }, []);

  return (
    <Dialog open={serviceModal}>
      <DialogContent className="sm:max-w-[475px]">
        <DialogHeader>
          <DialogTitle>Add a new Page</DialogTitle>
        </DialogHeader>

        {!isExistingPageChecked && (
          <div>
            <div className="flex justify-center items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
            <Separator className="my-4" />
          </div>
        )}

        <div className="flex items-center justify-start gap-4  py-3">
          <Checkbox
            id="isExistingPageCheckbox"
            onClick={() => setIsExistingPageChecked(!isExistingPageChecked)}
          />
          <Label htmlFor="isExistingPageCheckbox" className="text-right ">
            Do you want to add any existing page as a service?
          </Label>
        </div>

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

              <SelectContent className="h-[300px]">
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

        <DialogFooter>
          {Object.keys(service).length === 0 && (
            <Button onClick={handleAddPage}>
              {" "}
              {loading ? "Adding..." : "Add Page"}
            </Button>
          )}

          {Object.keys(service).length !== 0 && (
            <Button onClick={AddPageToService}>
              {" "}
              {loading ? "Adding..." : "Add this Page to services"}
            </Button>
          )}
          <Button onClick={() => setServiceModal(false)}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
