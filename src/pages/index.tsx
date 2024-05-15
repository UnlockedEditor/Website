import { Inter } from "next/font/google";
import Home from "@/components/home/home";

const inter = Inter({ subsets: ["latin"] });

export default function MainPage() {
  return (
    <main>
      <Home />
    </main>
  );
}
