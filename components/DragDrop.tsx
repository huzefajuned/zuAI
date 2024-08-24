import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import uploadIcon from "../app/icons/uploadIcon.svg";
import { Button } from "./ui/button";

const DragDrop = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
      console.log("Files dropped:", files[0].name);
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
      console.log("Files selected:", files[0].name);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileUpload").click();
  };

  return (
    <div
      className={classNames(
        "w-full h-60 p-4 grid place-content-center cursor-pointer rounded-xl border-dotted transition-colors bg-white",
        {
          "bg-violet-50 text-violet-500 hover:bg-violet-100": !isDragOver,
          "bg-violet-100 text-violet-600 border-violet-500": isDragOver,
          "border-2 border-dashed border-violet-100 hover:border-violet-500":
            !isDragOver,
          "border-2 border-dashed border-violet-500": isDragOver,
        }
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={triggerFileInput} // Trigger file input click on div click
    >
      <div className="flex flex-col items-center">
        <Image src={uploadIcon} alt="Upload Icon" height={40} width={40} />
        <span className="mt-2 font-medium text-sm text-textColor">
          {selectedFile
            ? `Selected file: ${selectedFile?.name as String}`
            : "Drag and drop a PDF "}{" "}
          <br />
          *Limit 25 MB per file.
        </span>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          style={{ display: "none" }} // Hide the input
        />

        <Button
          className={classNames(
            "text-primary text-sm my-2  px-8 py-2 bg-white rounded-full border-textColor border-[2px] hover:bg-gray-400 hover:text-white"
          )}
        >
          Upload your file
        </Button>
      </div>
    </div>
  );
};

export default DragDrop;
