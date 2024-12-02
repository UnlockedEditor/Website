"use client";

// @ts-ignore
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({ testimonials, autoplay = false }: { testimonials: Testimonial[]; autoplay?: boolean }) => {
  const [active, setActive] = useState(0);

  const handleNext = useMemo(() => () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useMemo(() => () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const imageMotionProps = useMemo(() => {
    const fixedRotation = 7;
    
    return {
      initial: {
        opacity: 0,
        scale: 0.9,
        z: -100,
        transform: `translateZ(-100px) scale(0.9) rotate(${fixedRotation}deg)`,
        willChange: "transform"
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        z: 100,
        transform: `translateZ(-100px) scale(0.9) rotate(${fixedRotation}deg)`,
        willChange: "transform"
      },
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      }
    };
  }, []);

  const getImageAnimateProps = useMemo(() => (index: number) => ({
    opacity: isActive(index) ? 1 : 0.7,
    scale: isActive(index) ? 1 : 0.95,
    z: isActive(index) ? 0 : -100,
    transform: `translateZ(${isActive(index) ? 0 : -100}px) scale(${isActive(index) ? 1 : 0.95}) rotate(${isActive(index) ? 0 : 7}deg)`,
    zIndex: isActive(index) ? 10 : testimonials.length + 2 - index,
    y: isActive(index) ? [0, -80, 0] : 0,
  }), [isActive, testimonials.length]);

  const textMotionProps = useMemo(() => ({
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
    },
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    }
  }), []);

  const wordMotionProps = useMemo(() => ({
    initial: {
      filter: "blur(10px)",
      opacity: 0,
      y: 5,
    },
    animate: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    }
  }), []);

  const testimonialImages = useMemo(() => (
    <AnimatePresence>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.src}
          {...imageMotionProps}
          animate={getImageAnimateProps(index)}
          className="absolute inset-0 origin-bottom"
        >
          <Image
            src={testimonial.src}
            alt={testimonial.name}
            width={500}
            height={500}
            draggable={false}
            className="h-full w-full rounded-3xl object-cover object-center"
          />
        </motion.div>
      ))}
    </AnimatePresence>
  ), [testimonials, imageMotionProps, getImageAnimateProps]);

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            {testimonialImages}
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            {...textMotionProps}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  {...wordMotionProps}
                  transition={{
                    ...wordMotionProps.transition,
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};