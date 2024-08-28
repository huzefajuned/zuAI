import RightBar from "@/components/RightBar";
import Sidebar from "@/components/Sidebar";
import MainContents from "@/components/MainContents";

export default function Home() {
  return (
    <main className="flex  flex-col sm:flex-row justify-between min-h-screen w-screen bg-background">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <MainContents />

      {/* Right Sidebar */}
      <RightBar />
    </main>
  );
}
