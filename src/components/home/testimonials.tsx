"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
    {
        quote:
          "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Mag",
        designation: "Totally does not work for UEditor",
        src: "https://cdn.discordapp.com/avatars/871141991340204042/7ac54b7352e2c6620c75fa71057022ee.webp",
      },
      {
        quote:
          "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Veyga",
        designation: "Totally does not work for UEditor",
        src: "https://cdn.discordapp.com/avatars/1119938236245094521/3834ee2175798f3b2327f4644f6a7191.webp",
      },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Testimonials</h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}