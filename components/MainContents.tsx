import React from "react";
import AddCoursework from "@/components/AddCoursework";
import FakeComp from "@/components/FakeComp";
import couseWorkIcon from "../app/icons/courseWork.svg";
import Image from "next/image";

const MainContents = () => {
  return (
    <div className="h-screen overflow-y-auto overflow-auto scrollbar-hide   flex flex-col   w-full sm:w-[70%] pt-24 px-10">
      <div className="flex flex-col sm:flex-row  gap-5 justify-start items-center ">
        <div className="couserWork  flex flex-col justify-between   ">
          <h2 className=" text-lg sm:text-3xl gap-2">
            Hey IB Folks ! Unsure about the quality of your answers? <br />
            <span className="text-primary"> We get you.</span>
          </h2>
          <AddCoursework />
        </div>
        <div className="couseWorkImage hidden sm:flex">
          <Image
            src={couseWorkIcon}
            alt="couseWorkIcon"
            height={340}
            width={340}
          />
        </div>
      </div>
      {/* rest components */}
      <div className="mm">
        <FakeComp />
      </div>
    </div>
  );
};

export default MainContents;
