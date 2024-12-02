"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React from "react";

const testimonials = [
    {
        quote: "UEditor is a great fu***ng tool with amazing potential. I truly believe this could fully replace UUU in some ways. I really like the idea of the plugin store. Someone could build a plugin for UE without having to go through the trouble of learning how to mod the game itself. Along with that, having a way to load maps, place new actors into the world, and view models all directly from within the game itself is amazing.",
        name: "Hax",
        designation: "UTester",
        src: "https://cdn.discordapp.com/avatars/302734867425132545/c3fe6826b2bdf1bc827ed1e8c728a7e4?size=1024",
      },
      {
        quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Veyga",
        designation: "Totally does not work for UEditor",
        src: "https://drive.google.com/uc?export=download&id=1eTAzHs3yX0S3dyjr92Lypk_V9rbpATxy",
      },
];

export default React.memo(function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Testimonials</h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
});