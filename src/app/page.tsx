"use client";

import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <Hero /> 
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}