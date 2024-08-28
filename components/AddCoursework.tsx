"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import btnIcon from "../app/icons/btnIcon.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DragDrop from "./DragDrop";
import toast from "react-hot-toast";

// Define a type for select options
interface SelectOption {
  value: string;
  label: string;
}

const AddCoursework: React.FC = () => {
  // State to store form inputs and errors
  const [courseworkType, setCourseworkType] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [essayTitle, setEssayTitle] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  console.log("file :", file);
  // State for error messages
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // toast error
  useEffect(() => {
    const keys = Object.keys(errors);

    if (keys[0] != undefined) {
      console.log("keys ", keys);
      toast.error(`${keys} are required!`);
    }
  }, [errors]);

  // Define the options for the select components
  const courseworkOptions: SelectOption[] = [
    { value: "essay", label: "Essay" },
    { value: "report", label: "Report" },
    { value: "research-paper", label: "Research Paper" },
  ];

  const subjectOptions: SelectOption[] = [
    { value: "math", label: "Mathematics" },
    { value: "history", label: "History" },
    { value: "science", label: "Science" },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!courseworkType)
      newErrors.courseworkType = "Coursework type is required.";
    if (!subject) newErrors.subject = "Subject is required.";
    if (!essayTitle) newErrors.essayTitle = "Essay title is required.";

    setErrors(newErrors);

    // Check if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form fields
    if (!validateForm()) return;

    const formData = new FormData(event.target as HTMLFormElement);
    console.log("Form Data:", formData);
    // Proceed with form submission logic
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl bg-[#FCFBFDB8] p-10 sm:p-6 border-2 border-gray-200 flex flex-col justify-between items-center w-full h-full"
    >
      <div className="w-full my-4">
        <DragDrop />
      </div>

      <div className="flex flex-col space-y-4 w-full">
        <h2 className="text-lg font-semibold text-gray-700">
          Select your course & subjects*
        </h2>

        <div className="flex flex-col sm:flex-row gap-5 py-2 w-full">
          <Select onValueChange={(value: string) => setCourseworkType(value)}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Coursework Type" />
            </SelectTrigger>
            <SelectContent>
              {courseworkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value: string) => setSubject(value)}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              {subjectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col space-y-2 w-full my-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Enter your essay title*(Required)
        </h2>
        <Input
          type="text"
          placeholder="How nation works..."
          className="w-full sm:w-[300px] rounded-full p-2 border border-[#FF4800] placeholder-gray-500"
          value={essayTitle}
          onChange={(e) => setEssayTitle(e.target.value)}
        />
      </div>

      <div className="w-full my-4">
        <Button
          type="submit"
          className="flex items-center space-x-2 bg-secondary rounded-full text-white py-2 px-4"
        >
          <Image
            src={btnIcon}
            alt="btnIcon"
            className="w-6 h-6 bg-white rounded-full"
          />
          <span>Evaluate your Score</span>
        </Button>
      </div>
    </form>
  );
};

export default AddCoursework;
