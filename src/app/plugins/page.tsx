import Plugins from "@/components/plugins/plugins";
import Header from "@/components/header";

export default function Home() {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-grow overflow-auto">
          <Plugins />
        </main>
      </div>
    );
  }