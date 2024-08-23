import AddCoursework from "@/components/AddCoursework";
import FakeComp from "@/components/FakeComp";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex  flex-row min-h-screen w-screen bg-background">
      {/* Left Sidebar */}
      <div className="h-screen p-2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="h-screen overflow-y-auto   m-3">
        <AddCoursework />
        <FakeComp />
        <FakeComp />
        <FakeComp />
        <FakeComp />
        <FakeComp />
        <FakeComp />
        <FakeComp />
        <FakeComp />
        <FakeComp />
        <FakeComp />
      </div>

      {/* Right Sidebar */}
      <div className=" h-screen p-2">
        <Sidebar />
      </div>
    </main>
  );
}
