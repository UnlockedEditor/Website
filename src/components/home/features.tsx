import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Bend reality to your will",
      description:
        "Modify any object in your games.",
      skeleton: <EditModeSkeleton />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Support for all your favorite games",
      description:
        "We support *nearly* all Unreal Engine 4-5 games.",
      skeleton: <GamesSkeleton />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Get started in seconds",
      description:
        "With our simple to use launcher, you can be up and running in seconds.",
      skeleton: <VideoSkeleton />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Create your own plugins for maximum customization.",
      description:
        "Our plugin system allows you to change any aspect of your game.",
      skeleton: <GlobeSkeleton />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20  lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with loads of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From moving objects to creating your own plugins, UEitor has you covered.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const EditModeSkeleton = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-[500px]">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-1xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          >
            <source src="/showcases/editmodecamera.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-32 bg-gradient-to-t from-white/50 dark:from-black/50 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-32 bg-gradient-to-b from-white/50 dark:from-black/50 to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const VideoSkeleton = () => {
  return (
    <Link
      href="https://www.youtube.com/watch?v=YCjNT9qGjh4" // This uses the HL2 documentary as a placeholder cos we don't have a video yet
      target="_blank"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <Image
            src="https://i3.ytimg.com/vi/YCjNT9qGjh4/maxresdefault.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export const GamesSkeleton = () => {
  const images = [
    {
      src: "/examplegames/five-nights-at-freddys-security-breach-cover.webp",
      row: 1
    },
    {
      src: "/examplegames/one_armed_cook-square.webp", 
      row: 1
    },
    {
      src: "/examplegames/poppyplaytime.webp",
      row: 1
    },
    {
      src: "/examplegames/five-nights-at-freddys-security-breach-cover.webp",
      row: 2
    },
    {
      src: "/examplegames/one_armed_cook-square.webp", 
      row: 2
    },
    {
      src: "/examplegames/poppyplaytime.webp",
      row: 2
    },
  ];

  // Create rotation values for each row that will be reused
  const firstRowRotations = images
    .filter(img => img.row === 1)
    .map(() => Math.random() * 20 - 10);
  const secondRowRotations = images
    .filter(img => img.row === 2)
    .map(() => Math.random() * 20 - 10);

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  const rowVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const reverseRowVariants = {
    animate: {
      x: [-1035, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const Row = ({ images, rotations, reverse = false }: { 
    images: Array<{ src: string; row: number }>; 
    rotations: number[];
    reverse?: boolean 
  }) => (
    <motion.div 
      className="flex space-x-8 md:space-x-12"
      variants={reverse ? reverseRowVariants : rowVariants}
      animate="animate"
    >
      {images.map((image, idx) => (
        <motion.div
          variants={imageVariants}
          key={`row-${reverse ? '2' : '1'}-${idx}`}
          style={{
            rotate: rotations[idx],
          }}
          whileHover="whileHover"
          whileTap="whileTap"
          className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0"
        >
          <Image
            src={image.src}
            alt="game image"
            width="500"
            height="500"
            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
          />
        </motion.div>
      ))}
      {/* Duplicate the images for seamless loop */}
      {images.map((image, idx) => (
        <motion.div
          variants={imageVariants}
          key={`row-${reverse ? '2' : '1'}-clone-${idx}`}
          style={{
            rotate: rotations[idx],
          }}
          whileHover="whileHover"
          whileTap="whileTap"
          className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0"
        >
          <Image
            src={image.src}
            alt="game image"
            width="500"
            height="500"
            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="relative flex flex-col gap-20 h-[500px] overflow-hidden">
      {/* First Row */}
      <div className="flex overflow-hidden">
        <Row 
          images={images.filter(img => img.row === 1)} 
          rotations={firstRowRotations}
        />
      </div>

      {/* Second Row */}
      <div className="flex overflow-hidden">
        <Row 
          images={images.filter(img => img.row === 2)} 
          rotations={secondRowRotations}
          reverse
        />
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const GlobeSkeleton = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
