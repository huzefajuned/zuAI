"use client";
import React, { useState } from "react";
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

// Define a type for select options
interface SelectOption {
  value: string;
  label: string;
}

const AddCoursework: React.FC = () => {
  // Define state types
  const [courseworkType, setCourseworkType] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

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

  return (
    <div className=" rounded-xl bg-[#D6DFE4] p-6 border-2 border-gray-200  flex flex-col justify-between items-center w-full h-full">
      <div className="w-full my-2">
        <DragDrop />
      </div>

      <div className="flex flex-col space-y-2 w-full">
        <h2 className="text-lg font-semibold text-gray-700">
          Select your course & subjects*
        </h2>

        <div className="flex flex-row gap-5 py-2">
          <Select onValueChange={(value: string) => setCourseworkType(value)}>
            <SelectTrigger className="w-[200px]">
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
            <SelectTrigger className="w-[200px]">
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

      <div className="flex flex-col space-y-2 gap-2 w-full">
        <h2 className="text-lg font-semibold text-gray-700">
          Enter your essay title*(Required)
        </h2>
        <Input
          type="text"
          placeholder="How nation works..."
          className="w-[300px] rounded-full p-2 border-[#FF4800] placeholder-gray-100"
        />
      </div>

      <div className="w-full my-2">
        <Button className="flex items-center space-x-2 mt-4 md:mt-0 bg-secondary rounded-full text-white">
          <Image src={btnIcon} alt="btnIcon" className="w-6 h-6 bg-white rounded-full " />
          <span>Evaluate your Score</span>
        </Button>
      </div>
    </div>
  );
};

export default AddCoursework;
