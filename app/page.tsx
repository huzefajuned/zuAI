import AddCoursework from "@/components/AddCoursework";
import FakeComp from "@/components/FakeComp";
import RightBar from "@/components/RightBar";
import Sidebar from "@/components/Sidebar";
import couseWorkIcon from "../app/icons/courseWork.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-row justify-between min-h-screen w-screen bg-background">
      {/* Left Sidebar */}
      <div className="h-screen p-2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="h-screen overflow-y-auto overflow-auto scrollbar-hide   flex flex-col w-[70%] py-10">
        <div className="  flex flex-row  gap-5 justify-between  w-full ">
          <div className="couserWork  flex flex-col justify-between gap-6  w-[70%]">
            <h2 className="text-3xl gap-2">
              Hey IB Folks ! Unsure about the quality of your answers? <br />
              <span className="text-primary"> We get you.</span>
            </h2>
            <AddCoursework />
          </div>
          <div className="couseWorkImage  w-[30%] ">
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

      {/* Right Sidebar */}
      <div className=" h-screen p-2">
        <RightBar />
      </div>
    </main>
  );
}
