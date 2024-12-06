"use client";

import { motion } from "framer-motion";
// @ts-ignore
import { Menu, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import React from "react";

const LAUNCHER_VERSION = "0.1.0";

const handleDownload = () => {
  window.location.href = `https://api.ueditor.lol/download/download-launcher/${LAUNCHER_VERSION}`;
};

export default React.memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { link: "https://forum.ueditor.lol", label: "Forums" },
    { link: "#featurebento", label: "Features" },
    { link: "#testimonials", label: "Testimonials" }
  ];

  return (
    <header className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/UEditor Logo White.svg" alt="UEditor" width={32} height={32} />
              </motion.div>
              <span className="text-xl font-bold text-white">UEditor</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.link}
                href={link.link} 
                className="text-gray-300 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2"
              onClick={handleDownload}
            >
              <Download className="h-5 w-5" />
              <span>Download the Launcher</span>
            </motion.button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className="text-gray-300 hover:text-white transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                className="bg-violet-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                onClick={handleDownload}
              >
                <Download className="h-5 w-5" />
                <span>Download</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
});