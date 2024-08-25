import AddCoursework from "@/components/AddCoursework";
import FakeComp from "@/components/FakeComp";
import RightBar from "@/components/RightBar";
import Sidebar from "@/components/Sidebar";
import couseWorkIcon from "../app/icons/courseWork.svg";
import Image from "next/image";
import MainContents from "@/components/MainContents";

export default function Home() {
  return (
    <main className="flex  flex-col sm:flex-row justify-between min-h-screen w-screen bg-background">
      {/* Left Sidebar */}
      {/* <div className="sm:h-screen h-10 w-screen sm:w-auto absolute sm:static  right-0 top-0 p-2 bg-fuchsia-400 sm:bg-gray-800"> */}
      <Sidebar />
      {/* </div> */}

      {/* Main Content */}
      <MainContents />

      {/* Right Sidebar */}
      {/* <div className=" h-screen p-2"> */}
      <RightBar />
      {/* </div> */}
    </main>
  );
}
