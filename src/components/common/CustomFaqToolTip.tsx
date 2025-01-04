"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

const CustomFaqToolTip = ({
  faqs,
  setFaqs,
  setTooltipIndex,
  index,
  modal,
  setModal,
}: any) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleEditSample = () => {
    //   const sampleToEdit = faqs[index];

    //   setQuestion(sampleToEdit.title);
    //   setAnswer(sampleToEdit.description);
    //   setIsEditing(true);
    //   setModal(true);
    console.log("dsa");
  };

  const handleSaveEdit = () => {
    //   const updatedSamples = faqs.map((sample: any, i: number) =>
    //     i === index
    //       ? {
    //           title,
    //           description,
    //         }
    //       : sample
    //   );

    //   setFaqs(updatedSamples);
    //   localStorage.setItem("samples", JSON.stringify(updatedSamples));
    //   resetFields();
    console.log("sdsa");
  };

  const handleAddSample = async () => {
    setIsLoading(true);

    try {
      if (question && answer) {
        const response = await fetch("/api/faq/add-faq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, answer }),
        });

        resetFields();

        const data = await response.json();
        console.log("data ==> ", data);

        toast.success("Faq added successfully");
      } else {
        toast.error("Please add the input");
      }
    } catch (error: any) {
      console.error(error?.message);
      toast.error(error?.message);
    }
  };

  const handleDeleteSample = () => {
    // const updatedSamples = samples.filter((_: any, i: number) => i !== index);
    // setSamples(updatedSamples);
    // localStorage.setItem("samples", JSON.stringify(updatedSamples));
    // setTooltipIndex(null);
    console.log("dsad");
  };

  const resetFields = () => {
    setQuestion("");
    setAnswer("");
    setModal(false);
    setIsLoading(false);
    setTooltipIndex(null);
  };

  return (
    <div className="absolute top-20 right-32 x-2 py-1 px-3 rounded cursor-pointer bg-black">
      <p onClick={handleEditSample} className="text-center py-1">
        Edit
      </p>
      <p onClick={handleDeleteSample} className="text-center py-1">
        Delete
      </p>
      <p
        onClick={() => {
          setModal(true);
        }}
        className="text-center py-1"
      >
        Add
      </p>

      <Dialog open={modal} onOpenChange={setModal}>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit Sample" : "Add a New Sample"}
            </DialogTitle>
          </DialogHeader>

          <div className="  space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="question">Question</Label>
              <Input
                className="border-[0.5px]"
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter faq question"
              />
            </div>
          </div>
          <div className="  space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="answer">Answer</Label>
              <Input
                className="border-[0.5px]"
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter faq answer"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={isEditing ? handleSaveEdit : handleAddSample}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              {isEditing ? (
                <span>
                  {!isLoading ? (
                    "Save Changes"
                  ) : (
                    <span className=" flex items-center gap-2">
                      {" "}
                      <Loader2 className="animate-spin" />
                      Editing
                    </span>
                  )}
                </span>
              ) : (
                <span>
                  {!isLoading ? (
                    "Add"
                  ) : (
                    <span className=" flex items-center gap-2">
                      {" "}
                      <Loader2 className="animate-spin" />
                      Adding
                    </span>
                  )}
                </span>
              )}
            </Button>
            <Button
              onClick={() => {
                setModal(false);
                resetFields();
                setIsEditing(false);
                setTooltipIndex(null);
              }}
              className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomFaqToolTip;
