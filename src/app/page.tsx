import Image from "next/image";
import Home from "@/components/home/home";

export default function MainPage() {
  return (
    <main className="flex h-auto flex-col items-center justify-between overflow-hidden min-w-screen min-h-screen">
      <Home />
    </main>
  );
}