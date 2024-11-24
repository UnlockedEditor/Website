"use client";

import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link href="#featurebento" className="text-gray-300 hover:text-white transition">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-white transition">
              Testimonials
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2"
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
              <Link
                href="#features"
                className="text-gray-300 hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-300 hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}