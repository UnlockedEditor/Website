import Image from "next/image";
import Home from "@/components/home/home";

export default function MainPage() {
  return (
    <main className="flex h-auto flex-col items-center justify-between p-24 overflow-hidden">
      <Home />
    </main>
  );
}