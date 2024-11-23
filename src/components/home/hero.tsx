"use client";

import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 right-4 md:right-24 bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-xs cursor-pointer hover:bg-white/20 transition-colors"
        onClick={() => window.open('https://dsc.gg/ueditor', '_blank')}
      >
        <div className="flex items-start space-x-3">
          <FaDiscord className="h-10 w-10 text-violet-400 flex-shrink-0" />
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

      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Build the Future with UEditor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8"
        >
          The most advanced development platform for building next-generation <span className="font-bold">Unreal Engine</span> mods
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button className="bg-violet-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-violet-700 transition">
            Download Now
          </button>
          <a
            href="https://docs.ueditor.lol"
            target="_blank"
            rel="noopener noreferrer" 
            className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition inline-block"
          >
            View Docs
          </a>
        </motion.div>
      </div>
    </div>
  );
}