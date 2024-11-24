"use client";

import { motion } from "framer-motion";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    Product: [
      { title: 'Features', href: '#featurebento' },
      //{ title: 'Pricing', href: '/pricing' },
      { title: 'Documentation', href: 'https://docs.ueditor.lol' },
      //{ title: 'Changelog', href: '/changelog' }
    ],
    Company: [
      //{ title: 'About', href: '/about' },
      //{ title: 'Blog', href: '/blog' },
      { title: 'Contact', href: 'https://dsc.gg/ueditor' }
    ],
    Resources: [
      { title: 'Documentation', href: 'https://docs.ueditor.lol' },
      { title: 'Support', href: 'https://dsc.gg/ueditor' },
      { title: 'Status', href: 'https://status.ueditor.lol' },
    ],
    Legal: [
      { title: 'Privacy', href: 'https://ueditor.notion.site/Privacy-Policy-fcdcf68d04b4477b82f0ffafb35b766e?pvs=74' },
      { title: 'Terms', href: 'https://ueditor.notion.site/Terms-and-Conditions-03697fd79b2a4fd4a4b3921336afbe1d?pvs=74' },
    ]
  };

  return (
    <footer className="bg-black/30 backdrop-blur-sm text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/UEditor Logo White.svg" alt="UEditor" width={32} height={32} />
              <span className="text-xl font-bold">UEditor</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm">
              Building the future of Unreal Engine modding.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://x.com/UEditorMenu"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <FaXTwitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://github.com/UnlockedEditor"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://dsc.gg/ueditor"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <FaDiscord className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            © {new Date().getFullYear()} UEditor. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="https://ueditor.notion.site/Privacy-Policy-fcdcf68d04b4477b82f0ffafb35b766e?pvs=74" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </Link>
            <Link href="https://ueditor.notion.site/Terms-and-Conditions-03697fd79b2a4fd4a4b3921336afbe1d?pvs=74" className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}