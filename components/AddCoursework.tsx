import React from "react";
import { Input } from "./ui/input";
import { DropdownMenu } from "./ui/dropdown-menu";

const AddCoursework = () => {
  return (
    <div className="bg-white  border-2 border-gray-200 rounded-lg flex flex-row justify-center items-center">
      <Input type="file" />
      <DropdownMenu />
    </div>
  );
};

export default AddCoursework;
