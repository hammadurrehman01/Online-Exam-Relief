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
  targetedQuestion,
}: any) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateQuestion, setUpdateQuestion] = useState("");
  const [updateAnswer, setUpdateAnswer] = useState("");

  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  const handleEditFaq = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/faq/update-faq`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          updateQuestion,
          updateAnswer,
          question,
          answer,
        }),
        cache: "reload",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update FAQ");
      }

      const data = await response.json();
      toast.success("FAQ updated successfully!");
      resetFields();
    } catch (error: any) {
      console.error("Error updating FAQ:", error.message);
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSample = async () => {
    setIsLoading(true);

    try {
      if (question && answer) {
        const response = await fetch(`${baseUrl}/api/faq/add-faq`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, answer }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to add FAQ");
        }

        const data = await response.json();
        setFaqs(data.faqs);
        toast.success("FAQ added successfully!");
        resetFields();
      } else {
        toast.error("Please provide both a question and an answer.");
      }
    } catch (error: any) {
      console.error(error?.message);
      toast.error(error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteSample = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/faq/delete-faq`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetedQuestion }),
        cache: "reload",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete FAQ");
      }

      const data = await response.json();
      toast.success("FAQ deleted successfully!");
      setTooltipIndex(null);
      setFaqs(data.faqs);
    } catch (error: any) {
      console.error("Error deleting FAQ:", error.message);
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFaqByQuestion = async (targetedQuestion: string) => {
    setModal(true);
    setIsEditing(true);
    console.log("baseUrl ==>", baseUrl);
    try {
      const response = await fetch(
        `${
          baseUrl
        }/api/faq/get-faq/${targetedQuestion.replaceAll(" ", "-").replaceAll("?", "").toLowerCase()}`,
        { cache: "reload" }

        // {
        //   method: "GET",
        //   cache: "reload",
        //   headers: { "Content-Type": "application/json" },
        // }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch FAQ");
      }

      const data = await response.json();
      console.log("data ==>", data);
      setUpdateQuestion(data.faq.question);
      setUpdateAnswer(data.faq.answer);
    } catch (error: any) {
      console.error("Error fetching FAQ:", error.message);
      toast.error(error.message || "An error occurred");
    }
  };

  const resetFields = () => {
    setQuestion("");
    setAnswer("");
    setModal(false);
    setIsLoading(false);
    setTooltipIndex(null);
    setIsEditing(false);
  };

  return (
    <div className="absolute -top-14 right-8 py-1 px-3 rounded cursor-pointer bg-black">
      <p
        onClick={() => fetchFaqByQuestion(targetedQuestion)}
        className="text-center py-1 text-white hover:underline"
      >
        Edit
      </p>
      <p
        onClick={handleDeleteSample}
        className="text-center py-1 text-white hover:underline"
      >
        Delete
      </p>
      <p
        onClick={() => {
          setModal(true);
        }}
        className="text-center py-1 text-white hover:underline"
      >
        Add
      </p>

      <Dialog open={modal} onOpenChange={setModal}>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Edit FAQ" : "Add a New FAQ"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="question">Question</Label>
              <Input
                className="border-[0.5px]"
                id="question"
                value={isEditing ? updateQuestion : question}
                onChange={(e) =>
                  isEditing
                    ? setUpdateQuestion(e.target.value)
                    : setQuestion(e.target.value)
                }
                placeholder="Enter FAQ question"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="answer">Answer</Label>
              <Input
                className="border-[0.5px]"
                id="answer"
                value={isEditing ? updateAnswer : answer}
                onChange={(e) =>
                  isEditing
                    ? setUpdateAnswer(e.target.value)
                    : setAnswer(e.target.value)
                }
                placeholder="Enter FAQ answer"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={isEditing ? handleEditFaq : handleAddSample}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  {isEditing ? "Saving..." : "Adding..."}
                </span>
              ) : (
                <>{isEditing ? "Save Changes" : "Add"}</>
              )}
            </Button>
            <Button
              onClick={resetFields}
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
