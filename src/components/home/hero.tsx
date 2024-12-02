"use client";

import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import React from "react";

export default React.memo(function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Video */}
      {/* <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/your-video.mp4" type="video/mp4" />
      </video> */}
      <iframe 
        src="https://www.youtube-nocookie.com/embed/G0krlwYO19Q?autoplay=1&loop=1&playlist=G0krlwYO19Q&controls=0&mute=1&vq=hd1080"
        title="YouTube video player" 
        className="absolute inset-0 w-screen h-screen object-cover border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="static z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-24 right-4 md:right-24 bg-black/50 rounded-lg p-4 max-w-xs cursor-pointer hover:bg-white/20 transition-colors"
          onClick={() => window.open('https://dsc.gg/ueditor', '_blank')}
        >
          <div className="flex items-start space-x-3">
            <FaDiscord className="h-10 w-10 text-blue-500 flex-shrink-0" />
            <div>
              <p className="text-white font-medium">Join our community</p>
              <p className="text-gray-300 text-sm">
                <span
                  ref={(el) => {
                    if (el) {
                      fetch(`https://discord.com/api/guilds/1153753482029965394/widget.json`)
                        .then(res => res.json())
                        .then(data => {
                          if (data.presence_count) {
                            el.textContent = `${data.presence_count} gamers are online!`;
                          }
                        })
                        .catch(() => {
                          el.textContent = 'The online count failed to fetch!';
                        });
                    }
                  }}
                >
                  Loading online count...
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-center max-w-4xl mx-auto backdrop-blur-md bg-black/20 p-8 rounded-2xl">
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
              className="mb-6 flex justify-center"
          >
            <Image
                src="/Untitblk-1.png"
                alt="Logo"
                width={700} // Adjust the width as needed
                height={700} // Adjust the height as needed
            />
          </motion.div>
          <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.4}}
              className="text-xl text-gray-300 mb-8"
          >
            The most advanced development platform for building next-generation <span className="font-bold">Unreal Engine</span> mods
          </motion.p>
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.6}}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/80 transition">
              Download Now
            </button>
            <a
                href="https://docs.ueditor.lol"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition inline-block"
            >
              View Documentation
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"/>
    </div>
  );
});