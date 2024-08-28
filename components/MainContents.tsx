import React from "react";
import AddCoursework from "@/components/AddCoursework";
import FakeComp from "@/components/FakeComp";
import couseWorkIcon from "../app/icons/courseWork.svg";
import Image from "next/image";
import MyCourseWork from "./MyCourseWork";

const MainContents = () => {
  return (
    <div className="h-screen overflow-y-auto overflow-auto scrollbar-hide flex flex-col w-full sm:w-[70%] pt-5 sm:pt-24 p-5 sm:p-0 ">
      <div className="  flex flex-col sm:flex-row gap-1  sm:gap-5 justify-start items-center">
        <div className=" w-9/12 flex flex-col gap-2 sm:gap-10  justify-between">
          <h2 className=" text-lg sm:text-2xl gap-0 sm:gap-2 w-full">
            Hey IB Folks ! Unsure about the quality of your answers? <br />
            <span className="text-primary"> We get you.</span>
          </h2>
          <AddCoursework />
        </div>
        <Image
          src={couseWorkIcon}
          alt="couseWorkIcon"
          height={390}
          width={390}
          className="hidden h-full sm:flex"
        />
      </div>
      {/* rest components */}
      <MyCourseWork />
    </div>
  );
};

export default MainContents;
