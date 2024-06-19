import Encryption from "@/components/main/Encryption";
import HomePage from "@/components/main/HomePage";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/ContestPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HomePage />
      </div>
    </main>
  );
}
